import { useEffect } from "react";
import { useParams } from "react-router-dom";
interface Props {
  setProgress: (progress: number) => void;
}
const BusinessSetup = ({ setProgress }: Props) => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, []);

  return <div>BusinessSetup</div>;
};

export default BusinessSetup;
