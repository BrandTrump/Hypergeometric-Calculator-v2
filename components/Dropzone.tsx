"use client";
import DropzoneComponent, { useDropzone } from "react-dropzone";
import React, { useState } from "react";
import { parseYDK } from "@/helpers/parse-ydk";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

function Dropzone() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      // Add toast notifications
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = handleFileRead;
      reader.readAsText(file);
    });
  };

  function handleFileRead(e: ProgressEvent<FileReader>) {
    if (loading) return;
    if (!e.target) return;

    setLoading(true);
    const toastId = toast.loading("Loading file...");

    const content = e.target.result;
    const mainDeck = parseYDK(content);
    router.push(`/deck/${mainDeck}`);

    toast.success("File uploaded successfully!", { id: toastId });
    setLoading(false);
  }

  const maxSize = 20971520;
  return (
    <DropzoneComponent
      minSize={0}
      maxSize={maxSize}
      onDrop={onDrop}
      multiple={false}
      accept={{ "application/ydk": [".ydk"] }}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className="flex items-center justify-center w-full mt-15 md:mt-15">
            <div
              {...getRootProps()}
              className={cn(
                "flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer border-gray-500 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90 mt-32",
                isDragActive
                  ? "bg-[#cbfd00] text-white animate-pulse"
                  : "dark:bg-slate-800/80 text-white"
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here or drop a file to upload!"}
              {isDragActive && !isDragReject && "Drop to upload this file!"}
              {isDragReject && "File type not accepted, sorry!"}
              {isFileTooLarge && (
                <div className="text-danger mt-2">File is too large.</div>
              )}
            </div>
          </section>
        );
      }}
    </DropzoneComponent>
  );
}

export default Dropzone;
