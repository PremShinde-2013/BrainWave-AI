'use client';
import { Loader, Loader2 } from "lucide-react";

const Generating = ({ className }: { className?: string; }) => {
	return (
		<div
			className={`flex items-center md:h-[3.5rem]   px-6 bg-neutral-100 opacity-60 dark:opacity-60 border-purple-700  dark:bg-neutral-800/80 rounded-[1.7rem] ${className || ""
				} text-base`}
		>
			<Loader2 className="w-5 h-5 mr-2" />
			Searching your second brain...
		</div>
	);
};

export default Generating;
