import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LlamaResponse } from "./Preview.type";

export const usePreviewService = () => {
  const router = useRouter();
  const [data, setData] = useState<LlamaResponse>();
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (router.isReady && data === undefined && lines.length === 0) {
      const dataFromRedirect = router.query.data
        ? JSON.parse(router.query.data as string)
        : null;

      if (!dataFromRedirect) {
        router.push("/");
      }

      console.log(dataFromRedirect);

      setData(dataFromRedirect);
      setLines(dataFromRedirect?.response.split("\n"));
    }
  }, [router, data, lines]);

  function navigateToMain() {
    router.push("/");
  }

  return {
    data,
    lines,
    navigateToMain,
  };
};
