import Image from "next/image";
import WriteIcon from "@/icons/write";

const TestimonialsAvatars = ({ priority }: { priority?: boolean }) => {
  return (
    <div className="flex flex-row justify-center items-center md:items-start gap-3">
      <div className="text-base text-base-content/80">
        <WriteIcon className="w-4 h-4 inline-flex ml-1"/>
        <span className="font-semibold text-base-content"> 32</span> already brainstorming
      </div>
    </div>
  );
};

export default TestimonialsAvatars;
