"use strict";

// ICONS
import { CiImageOn } from "react-icons/ci";

const ImageUpload = ({ label }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <label for="" class="text-[#504230]">
          {label}
        </label>
        <div class="flex justify-center mt-5 rounded-lg border-2 border-dashed border-gray-300 px-[2.4rem] py-16">
          <div class="text-center">
            <p>
              <CiImageOn className="lucide lucide-image mx-auto text-[5rem] text-gray-400" />
            </p>
            <div class="mt-6 flex text-sm leading-6 text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer rounded-lg font-semibold text-[#9c7f5c] text-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-[#9c7f5c]/80"
              >
                <span>Upload a file</span>
                <input
                  type="file"
                  name=""
                  id="file-upload"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-5 py-4 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm sr-only"
                />
              </label>
              <p class="pl-1 text-2xl">or drag and drop</p>
            </div>
            <p class="text-xl leading-5 text-gray-500 mt-2">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
