import { changeFontSize } from "@/slices/controllerSlice";
import { Input } from "../ui/input";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

function FontSize() {
  const fontSize = useAppSelector((state) => state.controller[0].fontSize);
  const dispatch = useAppDispatch();

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-neutral-400">
        Font Size
      </label>
      <Input
        type="number"
        className="dark w-16 bg-transparent"
        min={6}
        max={40}
        value={fontSize}
        onChange={(e) =>
          dispatch(
            changeFontSize({ index: 0, fontSize: Number(e.target.value) })
          )
        }
      />
    </div>
  );
}

export default FontSize;
