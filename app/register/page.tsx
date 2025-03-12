"use client"

import RecruitRegestration from "@/components/RecruitRegestration";
import StudentRegistration from "@/components/StudentRegistration";
import { useSearchParams } from "next/navigation";


export default function RegisterPage() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('role')

  if (!search) {
    return <div>Invalid Role</div>
  }

  return (
    <div>
      {{
        recruiter: <RecruitRegestration />,
        student: <StudentRegistration />
      }[search] 
      }
    </div>
  );
}