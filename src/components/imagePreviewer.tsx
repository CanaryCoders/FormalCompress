import { Label } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ImagePreviewerProps {
  imageFile?: File | null;
  children?: React.ReactNode;
}

export default function ImagePreviewer({ imageFile, children }: ImagePreviewerProps) {
  const [imageURL, setImageURL] = useState<string | undefined>();

  useEffect(() => {
    if (!imageFile) return;

    const url = URL.createObjectURL(imageFile);
    setImageURL(url);

    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [imageFile]);

  return imageFile ? (
    <div className="flex flex-col items-start space-y-4  w-full">
      <Label>{`${(imageFile.size / 1024 / 1024).toFixed(2)} MB`}</Label>
      <Dialog>
        <DialogTrigger>
          <img src={imageURL} alt="Image preview" className="rounded-md" />
        </DialogTrigger>
        <DialogContent className="w-fit h-fit">
          <DialogHeader>
            <DialogTitle>Image preview</DialogTitle>
          </DialogHeader>
          <img src={imageURL} alt="Image preview" className="w-full h-full" />
        </DialogContent>
      </Dialog>
    </div>
  ) : null;
}
