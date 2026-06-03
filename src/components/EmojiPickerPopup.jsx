import { useState } from "react";
import { IoImageOutline, IoClose } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";

export default function EmojiPickerPopup({ icon, onSelect }) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="mb-4 relative">
      <div
        className="flex items-center gap-x-4 mb-4 cursor-pointer"
        onClick={() => setShowPicker(true)}
      >
        <div className="bg-cyan-100 text-cyan-600 p-2.5 rounded">
          {icon ? (
            <img src={icon} alt="Icon" className="w-12 h-12" />
          ) : (
            <IoImageOutline className="text-3xl" />
          )}
        </div>
        <h4 className="text-lg font-medium">
          {icon ? "Change Icon" : "Pick Icon"}
        </h4>
      </div>
      {showPicker && (
        <div className="absolute top-14 left-0 z-50 shadow-lg">
          <button className="absolute -top-2 -right-2 bg-white text-zinc-800 p-1 border border-zinc-200 rounded-full z-10 cursor-pointer">
            <IoClose className="text-lg" onClick={() => setShowPicker(false)} />
          </button>
          <EmojiPicker
            open={showPicker}
            onEmojiClick={(emoji) => {
              onSelect(emoji?.imageUrl || "");
              setShowPicker(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
