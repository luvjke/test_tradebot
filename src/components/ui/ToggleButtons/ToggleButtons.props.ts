export interface ToggleButtonsProps {
  timeFrames: { value: string; label: string }[];
  onTimeFrameChange: (newTimeFrame: string) => void;
}
