import { renderHook, act } from "@testing-library/react";
import { useSiteStore, useSiteContext } from "./site-context";

describe("Site Context", () => {
  beforeEach(() => {
    // Clear the store before each test
    act(() => {
      useSiteStore.setState({ theme: "light" });
    });
  });

  test("initial theme should be light", () => {
    const { result } = renderHook(() => useSiteContext());
    expect(result.current.theme).toBe("light");
  });

  test("setTheme should update the theme", () => {
    const { result } = renderHook(() => useSiteContext());

    act(() => {
      result.current.setTheme("dark");
    });

    expect(result.current.theme).toBe("dark");
  });

  test("theme should persist between hook calls", () => {
    const { result: result1 } = renderHook(() => useSiteContext());

    act(() => {
      result1.current.setTheme("dark");
    });

    const { result: result2 } = renderHook(() => useSiteContext());
    expect(result2.current.theme).toBe("dark");
  });

  test("useSiteStore and useSiteContext should be in sync", () => {
    const { result: contextResult } = renderHook(() => useSiteContext());
    const { result: storeResult } = renderHook(() => useSiteStore());

    act(() => {
      contextResult.current.setTheme("dark");
    });

    expect(contextResult.current.theme).toBe("dark");
    expect(storeResult.current.theme).toBe("dark");
  });
});
