import { Button, Stack, Typography } from "@mui/material";
import { FormField } from "../../Components/FormField";
import { useState } from "react";
import { ImageForm } from "../types";
import { ImageButton, ImageSrc, ImageBackdrop } from "./ImageLayOut";
import {
  returnStringsIfNotNullOrUndefined,
  readFileAsDataURL,
} from "./ImageFunctions";

export const ImageInputSection = ({
  form,
  setForm,
}: {
  form: ImageForm;
  setForm: (v: ImageForm) => void;
}) => {
  const [imageFiles, setImageFiles] = useState<string[]>(
    returnStringsIfNotNullOrUndefined(form.files)
  );

  const handleChangeFile = async (files: FileList | null) => {
    if (files && files.length > 0) {
      try {
        const imageFiles = Array.from(files).filter(
          (file) => file.type === "image/png" || file.type === "image/jpeg"
        );
        const urls = await Promise.all(
          imageFiles.map((file) => readFileAsDataURL(file))
        );
        setImageFiles(urls);

        setForm({
          ...form,
          files: urls,
        });
      } catch (error) {
        console.error("Error reading files:", error);
      }
    }
  };
  return (
    <Stack direction="column">
      <Typography variant="h5" color="white">
        Image URL:
      </Typography>
      <FormField
        value={form.urls[0]}
        setValue={(u) => setForm({ ...form, urls: [u] })}
      />
      <label htmlFor="file-upload">
        <Button
          sx={{ width: 150 }}
          color="inherit"
          variant={
            imageFiles && imageFiles.filter((i) => i !== "").length > 0
              ? "contained"
              : "outlined"
          }
          component="span"
        >
          Add Pictures
        </Button>
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/png, image/jpeg"
        multiple
        onChange={(e) => {
          e && e.target.files && handleChangeFile(e.target.files);
        }}
        style={{ display: "none" }}
      />
      {form.files && form.files.length > 0 && (
        <>
          <Stack direction="row" spacing={1}>
            {form.files
              .filter((im) => im !== "")
              .map((image: string, i: number) => (
                <>
                  <ImageButton
                    sx={
                      form.files && form.files.includes(image)
                        ? { border: 2 }
                        : { border: 0 }
                    }
                    focusRipple
                    key={image}
                    style={{
                      width: 120,
                    }}
                    onClick={() => {}}
                  >
                    <ImageSrc
                      style={{
                        backgroundImage: `url(${image})`,
                        height: 100,
                        width: 100,
                      }}
                    />

                    <ImageBackdrop className="MuiImageBackdrop-root" />
                  </ImageButton>
                  <Button
                    onClick={() => {
                      const old = [...form.files];
                      old.splice(i);
                      setForm({
                        ...form,
                        files: old,
                      });
                      setImageFiles(old);
                    }}
                  >
                    Delete (X)
                  </Button>
                </>
              ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};
