import { VFC } from "react";



type Props = {
    handlePrev: () => void;
    handleNext: () => void;
}
export const PageTurnButtonArea:VFC<Props> = (props) => {
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