"use client";
import Header from "@/components/header";
import ImagePreviewer from "@/components/imagePreviewer";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { compressFile, download } from "@/lib/helpers";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LoadingSpinner } from "@/components/spinner";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState<File | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const handleOnChange = (event: any) => {
    setSelectedImage(event.target.files[0]);
  };
  const handleDownload = () => {
    download(compressedImage);
  };
  const handleCompressFile = async () => {
    if (selectedImage) {
      try {
        setIsCompressing(true);
        const compressedImageFile = await compressFile(selectedImage);
        setIsCompressing(false);
        setCompressedImage(compressedImageFile);
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return (
    <>
      <Header />
      <div className="animate-in fade-in duration-300 min-h-[100svh] mx-auto max-w-screen-md pt-20 pb-16 px-safe ">
        <div className="md:p-8 p-4">
          <section className="flex flex-col space-y-8">
            <div className="flex flex-col items-center justify-center">
              <Card className="md:w-[400px] w-[100%]">
                <CardHeader>
                  <CardTitle>Compress Image</CardTitle>
                  <CardDescription>
                    Easily compress your image without losing quality.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="picture">Image</Label>
                        <Input id="picture" type="file" onChange={handleOnChange} />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedImage(null);
                      // clear input with the id picture
                      const input = document.getElementById(
                        "picture"
                      ) as HTMLInputElement;
                      if (input) {
                        input.value = "";
                      }
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    disabled={isCompressing || selectedImage === null}
                    onClick={handleCompressFile}
                  >
                    {isCompressing ? "Compressing..." : " Compress Image"}
                    {isCompressing && <LoadingSpinner className="ml-2" />}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {compressedImage && (
              <div className="flex flex-col items-center justify-center">
                <Card className="md:w-[400px] w-[100%]">
                  <CardHeader>
                    <CardTitle>Download Image</CardTitle>
                    <CardDescription>Download your compressed image.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ImagePreviewer imageFile={selectedImage} />
                    <Separator />
                    <ImagePreviewer imageFile={compressedImage} />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button onClick={handleDownload}>Download</Button>
                  </CardFooter>
                </Card>
                {/* <div className="rounded-xl border bg-card text-card-foreground shadow md:w-[400px] w-[100%] mx-auto">
                  <ImagePreviewer imageFile={selectedImage} />
                  <ImagePreviewer imageFile={compressedImage} />
                  <Button onClick={handleDownload}>Download</Button>
                </div> */}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
