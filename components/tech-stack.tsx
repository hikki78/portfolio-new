"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
   { name: "React Native", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
   { name: "Swift", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" },
  { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Django", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" },
  { name: "gRPC", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBmaWxsPSIjRkZDQzAwIj48cGF0aCBkPSJNNDQxLjM3IDMwMi44M2MtMTAuNTYgMC0xOS4xMyA4LjU3LTE5LjEzIDE5LjEzIDAgMTAuNTYgOC41NyAxOS4xMyAxOS4xMyAxOS4xMyAxMC41NiAwIDE5LjEzLTguNTcgMTkuMTMtMTkuMTMgMC0xMC41Ni04LjU3LTE5LjEzLTE5LjEzLTE5LjEzem0wIDMwLjYzYy02LjM0IDAtMTEuNS01LjE2LTExLjUtMTEuNSAwLTYuMzQgNS4xNi0xMS41IDExLjUtMTEuNSA2LjM0IDAgMTEuNSA1LjE2IDExLjUgMTEuNSAwIDYuMzQtNS4xNiAxMS41LTExLjUgMTEuNXptLTIzLjk0LTEwNy42M2MwLTEwLjU2LTguNTctMTkuMTMtMTkuMTMtMTkuMTMtMTAuNTYgMC0xOS4xMyA4LjU3LTE5LjEzIDE5LjEzIDAgMTAuNTYgOC41NyAxOS4xMyAxOS4xMyAxOS4xMyAxMC41NiAwIDE5LjEzLTguNTcgMTkuMTMtMTkuMTN6bS0xOS4xMyAxMS41Yy02LjM0IDAtMTEuNS01LjE2LTExLjUtMTEuNSAwLTYuMzQgNS4xNi0xMS41IDExLjUtMTEuNSA2LjM0IDAgMTEuNSA1LjE2IDExLjUgMTEuNSAwIDYuMzQtNS4xNiAxMS41LTExLjUgMTEuNXptLTExLjUtOTYuMTNjMC0xMC41Ni04LjU3LTE5LjEzLTE5LjEzLTE5LjEzLTEwLjU2IDAtMTkuMTMgOC41Ny0xOS4xMyAxOS4xMyAwIDEwLjU2IDguNTcgMTkuMTMgMTkuMTMgMTkuMTMgMTAuNTYgMCAxOS4xMy04LjU3IDE5LjEzLTE5LjEzem0tMTkuMTMgMTEuNWMtNi4zNCAwLTExLjUtNS4xNi0xMS41LTExLjUgMC02LjM0IDUuMTYtMTEuNSAxMS41LTExLjUgNi4zNCAwIDExLjUgNS4xNiAxMS41IDExLjUgMCA2LjM0LTUuMTYgMTEuNS0xMS41IDExLjV6TTI1NiA0OC4wOGMtMTAuNTYgMC0xOS4xMyA4LjU3LTE5LjEzIDE5LjEzIDAgMTAuNTYgOC41NyAxOS4xMyAxOS4xMyAxOS4xMyAxMC41NiAwIDE5LjEzLTguNTcgMTkuMTMtMTkuMTMgMC0xMC41Ni04LjU3LTE5LjEzLTE5LjEzLTE5LjEzem0wIDMwLjYzYy02LjM0IDAtMTEuNS01LjE2LTExLjUtMTEuNSAwLTYuMzQgNS4xNi0xMS41IDExLjUtMTEuNSA2LjM0IDAgMTEuNSA1LjE2IDExLjUgMTEuNSAwIDYuMzQtNS4xNiAxMS41LTExLjUgMTEuNXptLTExMi4xNyA1OC4zN2MtMTAuNTYgMC0xOS4xMyA4LjU3LTE5LjEzIDE5LjEzIDAgMTAuNTYgOC41NyAxOS4xMyAxOS4xMyAxOS4xMyAxMC41NiAwIDE5LjEzLTguNTcgMTkuMTMtMTkuMTMgMC0xMC41Ni04LjU3LTE5LjEzLTE5LjEzLTE5LjEzem0wIDMwLjYzYy02LjM0IDAtMTEuNS01LjE2LTExLjUtMTEuNSAwLTYuMzQgNS4xNi0xMS41IDExLjUtMTEuNSA2LjM0IDAgMTEuNSA1LjE2IDExLjUgMTEuNSAwIDYuMzQtNS4xNiAxMS41LTExLjUgMTEuNXptLTc3LjE3IDc3LjE3Yy0xMC41NiAwLTE5LjEzIDguNTctMTkuMTMgMTkuMTMgMCAxMC41NiA4LjU3IDE5LjEzIDE5LjEzIDE5LjEzIDEwLjU2IDAgMTkuMTMtOC41NyAxOS4xMy0xOS4xMyAwLTEwLjU2LTguNTctMTkuMTMtMTkuMTMtMTkuMTN6bTAgMzAuNjNjLTYuMzQgMC0xMS41LTUuMTYtMTEuNS0xMS41IDAtNi4zNCA1LjE2LTExLjUgMTEuNS0xMS41IDYuMzQgMCAxMS41IDUuMTYgMTEuNSAxMS41IDAgNi4zNC01LjE2IDExLjUtMTEuNSAxMS41em0wIDc3LjE3Yy0xMC41NiAwLTE5LjEzIDguNTctMTkuMTMgMTkuMTMgMCAxMC41NiA4LjU3IDE5LjEzIDE5LjEzIDE5LjEzIDEwLjU2IDAgMTkuMTMtOC41NyAxOS4xMy0xOS4xMyAwLTEwLjU2LTguNTctMTkuMTMtMTkuMTMtMTkuMTN6bTAgMzAuNjNjLTYuMzQgMC0xMS41LTUuMTYtMTEuNS0xMS41IDAtNi4zNCA1LjE2LTExLjUgMTEuNS0xMS41IDYuMzQgMCAxMS41IDUuMTYgMTEuNSAxMS41IDAgNi4zNC01LjE2IDExLjUtMTEuNSAxMS41em03Ny4xNyA3Ny4xN2MtMTAuNTYgMC0xOS4xMyA4LjU3LTE5LjEzIDE5LjEzIDAgMTAuNTYgOC41NyAxOS4xMyAxOS4xMyAxOS4xMyAxMC41NiAwIDE5LjEzLTguNTcgMTkuMTMtMTkuMTMgMC0xMC41Ni04LjU3LTE5LjEzLTE5LjEzLTE5LjEzem0wIDMwLjYzYy02LjM0IDAtMTEuNS01LjE2LTExLjUtMTEuNSAwLTYuMzQgNS4xNi0xMS41IDExLjUtMTEuNSA2LjM0IDAgMTEuNSA1LjE2IDExLjUgMTEuNSAwIDYuMzQtNS4xNiAxMS41LTExLjUgMTEuNXptMTEyLjE3LTMwLjYzYy0xMC41NiAwLTE5LjEzIDguNTctMTkuMTMgMTkuMTMgMCAxMC41NiA4LjU3IDE5LjEzIDE5LjEzIDE5LjEzIDEwLjU2IDAgMTkuMTMtOC41NyAxOS4xMy0xOS4xMyAwLTEwLjU2LTguNTctMTkuMTMtMTkuMTMtMTkuMTN6bTAgMzAuNjNjLTYuMzQgMC0xMS41LTUuMTYtMTEuNS0xMS41IDAtNi4zNCA1LjE2LTExLjUgMTEuNS0xMS41IDYuMzQgMCAxMS41IDUuMTYgMTEuNSAxMS41IDAgNi4zNC01LjE2IDExLjUtMTEuNSAxMS41em03Ny4xNy03Ny4xN2MtMTAuNTYgMC0xOS4xMyA4LjU3LTE5LjEzIDE5LjEzIDAgMTAuNTYgOC41NyAxOS4xMyAxOS4xMyAxOS4xMyAxMC41NiAwIDE5LjEzLTguNTcgMTkuMTMtMTkuMTMgMC0xMC41Ni04LjU3LTE5LjEzLTE5LjEzLTE5LjEzem0wIDMwLjYzYy02LjM0IDAtMTEuNS01LjE2LTExLjUtMTEuNSAwLTYuMzQgNS4xNi0xMS41IDExLjUtMTEuNSA2LjM0IDAgMTEuNSA1LjE2IDExLjUgMTEuNSAwIDYuMzQtNS4xNiAxMS41LTExLjUgMTEuNXptNzcuMTctNzcuMTdjLTEwLjU2IDAtMTkuMTMgOC41Ny0xOS4xMyAxOS4xMyAwIDEwLjU2IDguNTcgMTkuMTMgMTkuMTMgMTkuMTMgMTAuNTYgMCAxOS4xMy04LjU3IDE5LjEzLTE5LjEzIDAtMTAuNTYtOC41Ny0xOS4xMy0xOS4xMy0xOS4xM3ptMCAzMC42M2MtNi4zNCAwLTExLjUtNS4xNi0xMS41LTExLjUgMC02LjM0IDUuMTYtMTEuNSAxMS41LTExLjUgNi4zNCAwIDExLjUgNS4xNiAxMS41IDExLjUgMCA2LjM0LTUuMTYgMTEuNS0xMS41IDExLjV6TTI1NiAzODRjLTcwLjU4IDAtMTI4LTU3LjQyLTEyOC0xMjhzNTcuNDItMTI4IDEyOC0xMjggMTI4IDU3LjQyIDEyOCAxMjgtNTcuNDIgMTI4LTEyOCAxMjh6bTAtMjQ4Yy02Ni4xNyAwLTEyMCA1My44My0xMjAgMTIwczUzLjgzIDEyMCAxMjAgMTIwIDEyMC01My44MyAxMjAtMTIwLTUzLjgzLTEyMC0xMjAtMTIwem0wIDIxNmMtNTIuOTMgMC05Ni00My4wNy05Ni05NnM0My4wNy05NiA5Ni05NiA5NiA0My4wNyA5NiA5Ni00My4wNyA5Ni05NiA5NnptMC0xODRjLTQ4LjUyIDAtODggMzkuNDgtODggODhzMzkuNDggODggODggODggODgtMzkuNDggODgtODgtMzkuNDggODgtODggODh6bTAgMTUyYy0zNS4yOSAwLTY0LTI4LjcxLTY0LTY0czI4LjcxLTY0IDY0LTY0IDY0IDI4LjcxIDY0IDY0LTI4LjcxIDY0LTY0IDY0em0wLTEyMGMtMzAuODggMC01NiAyNS4xMi01NiA1NnMyNS4xMiA1NiA1NiA1NiA1Ni0yNS4xMiA1Ni01Ni0yNS4xMi01Ni01Ni01NnoiLz48L3N2Zz4=" },
  { name: "+69 others", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0iIzY0NzQ4QiI+PHBhdGggZD0iTTMyIDJDMTUuNDMzIDIgMiAxNS40MzMgMiAzMnMxMy40MzMgMzAgMzAgMzAgMzAtMTMuNDMzIDMwLTMwUzQ4LjU2NyAyIDMyIDJ6bTAgNTRDMTYuNTM2IDU2IDQgNDMuNDY0IDQgMjhTMTYuNTM2IDAgMzIgMHMyOCAxMi41MzYgMjggMjgtMTIuNTM2IDI4LTI4IDI4eiIvPjxwYXRoIGQ9Ik0zMiAxNmE0IDQgMCAxIDAgMCA4IDQgNCAwIDAgMCAwLTh6bTAgMTJhNCA0IDAgMSAwIDAgOCA0IDQgMCAwIDAgMC04em0wIDEyYTQgNCAwIDEgMCAwIDggNCA0IDAgMCAwIDAtOHoiLz48L3N2Zz4=" },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="relative h-12 w-12 sm:h-16 sm:w-16">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-center">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}