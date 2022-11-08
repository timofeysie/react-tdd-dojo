import { renderHook, act } from "@testing-library/react";
import { useAnagrams } from "./useAnagrams";

describe("useAnagrams hook", () => {
   it("checking state updates", () => {
     const { result } = renderHook(() => useAnagrams(""));
     const [ anagram, updateAnagram ] = result.current;
     expect(result.current.values().next().value).toBe("");
     act(() => {
       updateAnagram("ab");
     });
     expect(result.current.values().next().value).toBe("ab ba");
   });
});
