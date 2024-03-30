'use client';

import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { editSnippet } from '@/actions';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({
  snippet,
}: Readonly<SnippetEditFormProps>) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value ?? '');
    console.log('value', value);
  };
  const editSnippetAction = editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="border rounded p-2"
          onClick={() => editSnippet(snippet.id, code)}
        >
          Save
        </button>
      </form>
    </div>
  );
}
