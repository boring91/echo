import { ConversationIdView } from "@/modules/dashboard/ui/views/conversation-id-view";
import { Id } from "@workspace/backend/_generated/dataModel";

const Page = async ({
  params,
}: {
  params: Promise<{ conversationId: Id<"conversations"> }>;
}) => {
  const { conversationId } = await params;
  return <ConversationIdView conversationId={conversationId} />;
};

export default Page;
