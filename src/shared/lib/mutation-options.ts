import type { DefaultError } from "@tanstack/query-core";
import { UseMutationOptions } from "@tanstack/react-query";

export function mutationOptions<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationOptions<TData, TError, TVariables, TContext> {
  return options
}
