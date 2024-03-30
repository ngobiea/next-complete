import { db } from '@/db';
import notFound from '../not-found';
import SnippetEditForm from '@/components/snippet-edit-form';
interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage({
  params,
}: Readonly<SnippetEditPageProps>) {
  const id = parseInt(params.id, 10);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
