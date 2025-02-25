import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto m-12 p-4">
      <div className="bg-white border-1 border-gray-300">
        <div className="bg-[#F5F5F5] px-4 py-2 border-b">
          <span className="text-[#666666]">Редакция</span>
        </div>
        <div className="px-4 py-2 ">
          <div className="space-y-[6px] ">
            <a
              href="#"
              className="block text-[#0066CC] text-[13px] no-underline "
            >
              История
            </a>
            <a
              href="#"
              className="block text-[#0066CC] text-[13px] no-underline"
            >
              Педагогика (общая)
            </a>
            <a
              href="#"
              className="block text-[#0066CC] text-[13px] no-underline"
            >
              Педагогика (преподавание языков)
            </a>
            <a
              href="#"
              className="block text-[#0066CC] text-[13px] no-underline"
            >
              Педагогика (физическая культура)
            </a>
            <a
              href="#"
              className="block text-[#0066CC] text-[13px] no-underline"
            >
              Право
            </a>
            <a
              href="#"
              className="block text-[#0066CC] text-[13px] no-underline"
            >
              Социология и политология
            </a>
            <a
              href="#"
              className="block text-[#0066CC] text-[13px] no-underline"
            >
              Филология
            </a>
            <a
              href="#"
              className="block text-[#0066CC] text-[13px] no-underline"
            >
              Философия
            </a>
          </div>
          <div className="text-[#666666] mt-4 text-[13px]">Всего: 8</div>
        </div>
      </div>
    </div>
  );
}
