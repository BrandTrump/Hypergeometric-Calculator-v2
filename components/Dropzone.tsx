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
      // Check if the file type is valid (application/octet-stream for YDK files)
      if (file.name.endsWith(".ydk")) {
        const reader = new FileReader();

        // Add toast notifications
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = handleFileRead;
        reader.readAsText(file);
      } else {
        // Handle invalid file type (display an error message or log it)
        toast.error("Invalid file type!");
      }
    });
  };

  function handleFileRead(e: ProgressEvent<FileReader>) {
    try {
      if (loading) return;
      if (!e.target) return;

      setLoading(true);
      const toastId = toast.loading("Loading file...");

      const content = e.target.result;
      const mainDeck = parseYDK(content);
      router.push(`/deck/${mainDeck}`);

      toast.dismiss(toastId);
    } catch (error) {
      // Handle the error here, you might want to log it or display an error message
      console.error("An error occurred while processing the file:", error);
    } finally {
      setLoading(false);
      toast.success("File loaded successfully!");
    }
  }

  const maxSize = 20971520;
  return (
    <DropzoneComponent
      minSize={0}
      maxSize={maxSize}
      onDrop={onDrop}
      multiple={false}
      // accept={{ "application/.ydk": [".ydk"] }}
    >
      {({ getRootProps, getInputProps, isDragActive, fileRejections }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className="flex items-center justify-center w-full mt-15 md:mt-15">
            <div
              {...getRootProps()}
              className={cn(
                "flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer border-gray-500 bg-gradient-to-r from-black/90 via-sky-900/90 to-black/90 mt-32 transition duration-200 ease-in-out",
                isDragActive
                  ? "bg-[#cbfd00] text-white"
                  : "dark:bg-slate-800/80 text-white"
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && (
                <div className="text-center">
                  <p className="font-light">
                    Click here or drop a <span className="font-bold">.ydk</span>{" "}
                    file to upload!
                  </p>
                  <em>(Only .ydk files will be accepted)</em>
                </div>
              )}
              {isDragActive && "Drop to upload this file!"}
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
