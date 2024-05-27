import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCalls = () => {
    const [calls, setCalls] = useState<Call[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [callParticipants, setCallParticipants] = useState<{ [callId: string]: any[] }>({});
    const client = useStreamVideoClient();
    const { user } = useUser();

    useEffect(() => {
        const loadCalls = async () => {
            if(!client || !user?.id) return;

            setIsLoading(true);

            try {
                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

                const { calls } = await client.queryCalls({
                    sort: [{ field: 'starts_at', direction: -1 }],
                    filter_conditions: {
                        starts_at: { $gte: thirtyDaysAgo.toISOString() },
                        $or: [
                            { created_by_user_id: user.id },
                            { members: { $in: [user.id] } }
                        ]
                    },
                    limit: 10
                });

                setCalls(calls);

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        loadCalls();

    }, [client, user?.id]);

    const now = new Date();

    const endedCalls = calls.filter(({ state: {startsAt, endedAt}}: Call) => {
        return (startsAt && new Date(startsAt) < now || !!endedAt)
    });

    const upcomingCalls = calls.filter(({ state: {startsAt, endedAt}}: Call) => {
        return startsAt && new Date(startsAt) > now
    });

    return { isLoading, endedCalls, upcomingCalls, callRecordings: calls }
}