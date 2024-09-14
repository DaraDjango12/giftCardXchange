import React from "react";
import { BiLike, BiComment } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";

interface SocialStatsProps {
  likes: number;
  comments: number;
  shares: number;
  text?: string;
}

const SocialStats: React.FC<SocialStatsProps> = ({
  likes,
  comments,
  shares,
  text,
}) => {
  return (
    <div className="flex items-center gap-2 ">
      <StatItem
        icon={<BiLike size={15} color="gray" />}
        count={likes}
        text={text}
      />
      <StatItem
        icon={<BiComment size={15} color="gray" />}
        count={comments}
        text={text}
      />
      <StatItem
        icon={<IoShareSocialOutline size={15} color="gray" />}
        count={shares}
        text={text}
      />
    </div>
  );
};

interface StatItemProps {
  icon: React.ReactNode;
  count: number;
  text?: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  count,
  text = "1.6rem",
}) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span className={`text-[1rem] text-gray-500 md:text-[${text}]`}>
        {count}
      </span>
    </div>
  );
};

export default SocialStats;
