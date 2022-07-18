import Webcam from "react-webcam";
import {useCallback, useRef} from "react";

function FacialRecognitionLoginPage() {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const webcamRef = useRef(null);

    const capture = useCallback(
        () => {
            webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    return (
        <>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
        </>
    );
}

export default FacialRecognitionLoginPage;
