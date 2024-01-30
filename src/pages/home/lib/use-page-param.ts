import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

const PAGE_KEY = 'page'

export const usePageParam = (defaultValue?: string | number) => {
  const [searchParams, setSearchParams] = useSearchParams({ [PAGE_KEY]: defaultValue?.toString() || '1' })
  const pageRaw = searchParams.get('page') || defaultValue || '1'
  const page = +pageRaw
  const setPage = useCallback((page: number | string) => {
    setSearchParams({ page: page.toString() })
  }, [setSearchParams]);

  return [page, setPage] as const
}
