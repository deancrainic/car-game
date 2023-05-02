import {
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import {Suspense, useEffect, useState} from "react";
import {Car} from "./Car";
import {Ground} from "./Ground";
import {Track} from "./Track";

export function Scene() {
    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

    useEffect(() => {
        const keyDownHandler = e => {
            if (e.key === "k") {
                if (thirdPerson) {
                    setCameraPosition([-6, 3.9, 6.21]);
                }
                setThirdPerson(prevState => !prevState);
            }
        }

        window.addEventListener("keydown", keyDownHandler);
        return () => window.removeEventListener("keydown", keyDownHandler);
    }, [thirdPerson]);

    return (
        <Suspense fallback={null}>
            <Environment
                files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
                background={"both"}
            />

            {thirdPerson ?
                <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40}/> :
                <>
                    <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40}/>
                    <OrbitControls target={[-2.64, -0.71, 0.03]}/>
                </>}
            <Track/>
            <Ground/>
            <Car thirdPerson={thirdPerson}/>
        </Suspense>
    );
}
