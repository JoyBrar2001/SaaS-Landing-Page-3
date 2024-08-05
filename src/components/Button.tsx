import React from 'react';

const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative px-3 py-2 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8C45FF] border border-white/20">
      {props.children}
    </button>
  );
}

export default Button;