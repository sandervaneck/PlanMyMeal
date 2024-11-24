import { Button, Stack } from "@mui/material";
import { FormField } from "../../Components/FormField";
import { useState } from "react";
import { RequestFormType } from "../types";
import { ImageButton, ImageSrc, ImageBackdrop } from "./ImageLayOut";
import { returnStringsIfNotNullOrUndefined } from "./ImageFunctions";

export const ImageInputSection1 = ({
  form,
  setForm,
}: {
  form: RequestFormType;
  setForm: (v: RequestFormType) => void;
}) => {
  const [uploadedFileIds, setUploadedFileIds] = useState<string[]>([]);
  const handleFileUpload = (f: FileList) => {};
  console.log(uploadedFileIds); // To check the file IDs

  return (
    <Stack direction="column">
      Image File Upload
      <label htmlFor="file-upload">
        <Button
          sx={{ width: 150 }}
          color="inherit"
          variant={uploadedFileIds.length > 0 ? "contained" : "outlined"}
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
          // e && e.target.files && handleFileUpload(e.target.files);
        }}
        style={{ display: "none" }}
      />
      {uploadedFileIds.length > 0 && (
        <Stack direction="row" spacing={1}>
          {uploadedFileIds.map((fileId, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={1}>
              {fileId}
              <Button
                color="error"
                onClick={() => {
                  const updatedFileIds = uploadedFileIds.filter(
                    (_, i) => i !== index
                  );
                  setUploadedFileIds(updatedFileIds);
                  setForm({
                    ...form,
                    imageUrls: updatedFileIds,
                  });
                }}
              >
                Delete (X)
              </Button>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export const ImageInputSection = ({
  form,
  setForm,
}: {
  form: RequestFormType;
  setForm: (v: RequestFormType) => void;
}) => {
  const [imageFiles, setImageFiles] = useState<string[]>(
    returnStringsIfNotNullOrUndefined(form.imageUrls)
  );
  console.log(imageFiles);
  return (
    <Stack direction="column">
      Image URL:
      <FormField
        value={form.imageUrls[0]}
        setValue={(u) => setForm({ ...form, imageUrls: [u] })}
      />
      {form.imageUrls && form.imageUrls.length > 0 && (
        <>
          <Stack direction="row" spacing={1}>
            {form.imageUrls
              .filter((im) => im !== "")
              .map((image: string, i: number) => (
                <>
                  <ImageButton
                    sx={
                      form.imageUrls && form.imageUrls.includes(image)
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
                      const old = [...form.imageUrls];
                      old.splice(i);
                      setForm({
                        ...form,
                        imageUrls: old,
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
