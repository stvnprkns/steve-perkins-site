import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import type { TeamMember } from '@/types/team';

interface TeamMemberProps {
  member: TeamMember;
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative w-6 h-6 flex-shrink-0">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="rounded-full object-cover"
          sizes="24px"
        />
      </div>
      {member.linkedin === '#' ? (
        <span className="text-sm text-foreground">{member.name}</span>
      ) : (
        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1 group-hover:underline"
        >
          {member.name}
          <GoArrowUpRight className="inline-block w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
        </Link>
      )}
    </div>
  );
}

interface TeamListProps {
  members: TeamMember[];
  className?: string;
}

export function TeamList({ members, className = '' }: TeamListProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${className}`}>
      {members.map((member) => (
        <TeamMember key={member.name} member={member} />
      ))}
    </div>
  );
}
