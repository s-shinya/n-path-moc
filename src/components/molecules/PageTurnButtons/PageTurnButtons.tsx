import { VFC } from "react";

type Props = {
    handlePrev: () => void;
    handleNext: () => void;
}
const PageTurnButtons:VFC<Props> = (props) => {
    const {handlePrev, handleNext} = props;
    return (
        <>
        <button type="button"
        onClick={handlePrev}
        >前へ</button>
        <button type="button"
            onClick={handleNext}
        >次へ</button>
        </>
    )
}

export default PageTurnButtons