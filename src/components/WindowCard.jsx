const WindowCard = ({ title, children, className = "" }) => {
  return (
    <div
      className={`overflow-hidden border rounded-xl border-border bg-surface ${className}`}
    >
      <div className='flex items-center gap-2 px-4 py-3 border-b bg-surface-chrome border-border'>
        <span className='w-3 h-3 rounded-full bg-[#F65F5F]' />
        <span className='w-3 h-3 rounded-full bg-[#F2B84B]' />
        <span className='w-3 h-3 rounded-full bg-[#3FBF60]' />
        {title && (
          <span className='ml-2 text-xs text-text-muted font-mono truncate'>
            {title}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default WindowCard;
