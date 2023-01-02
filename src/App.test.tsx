import { renderHook, act } from "@testing-library/react";
import useAnagrams from "./useAnagrams";

describe("useAnagrams hook", () => {
  it("checking state updates", () => {
    const { result } = renderHook(() => useAnagrams(""));
    const [anagram, updateAnagram] = result.current;
    expect(result.current.values().next().value).toBe("");
    act(() => {
      updateAnagram("ab");
    });
    expect(result.current.values().next().value).toBe("ab ba");
  });

  it("checking state updates for four letter inputs", () => {
    const { result } = renderHook(() => useAnagrams(""));
    const [anagram, updateAnagram] = result.current;
    expect(result.current.values().next().value).toBe("");
    const expectedAnagrams =
      "biro bior brio broi boir bori ibro ibor irbo irob iobr iorb rbio rboi ribo riob robi roib obir obri oibr oirb orbi orib";
    act(() => {
      updateAnagram("biro");
    });
    expect(result.current.values().next().value).toBe(expectedAnagrams);
  });
});
