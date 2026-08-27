export function SourceCitation({ sources }: { sources: string[] }) {
  return <p className="text-xs text-muted-foreground">Sources: {sources.join(' \u00b7 ')}</p>
}
