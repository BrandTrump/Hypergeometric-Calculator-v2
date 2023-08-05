"use client";
import { parseYDK } from "@/helpers/parse-ydk";
import { useCardStore } from "@/store/card-store";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

function FileUpload() {
  const router = useRouter();
  const { resetPreviewState, resetSelectedCardState, resetCalculationState } =
    useCardStore();

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    resetPreviewState();
    resetSelectedCardState();
    resetCalculationState();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = handleFileRead;
    reader.readAsText(file);
  };

  function handleFileRead(e: ProgressEvent<FileReader>) {
    if (!e.target) return;
    const content = e.target.result;
    const mainDeck = parseYDK(content);
    router.push(`/deck/${mainDeck}`);
  }

  return (
    <div className="flex items-center justify-center w-full mt-14 md:mt-0">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer border-gray-500 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90 mt-32"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-white dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-white dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-white dark:text-gray-400">.ydk</p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          accept=".ydk"
          className="hidden"
          onChange={handleFileInputChange}
        />
      </label>
    </div>
  );
}

export default FileUpload;
