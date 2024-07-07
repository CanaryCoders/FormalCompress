"use client";

const blurLayers = [
  { blur: 0, gradient: "0%, rgba(0, 0, 0, 1) 20%" },
  { blur: 0.205761316872428, gradient: "10%, rgba(0, 0, 0, 1) 30%" },
  { blur: 0.823045267489712, gradient: "20%, rgba(0, 0, 0, 1) 40%" },
  { blur: 1.8518518518518516, gradient: "30%, rgba(0, 0, 0, 1) 50%" },
  { blur: 3.292181069958848, gradient: "40%, rgba(0, 0, 0, 1) 60%" },
  { blur: 5.144032921810701, gradient: "50%, rgba(0, 0, 0, 1) 70%" },
  { blur: 7.4074074074074066, gradient: "60%, rgba(0, 0, 0, 1) 80%" },
  { blur: 10.082304526748972, gradient: "70%, rgba(0, 0, 0, 1) 90%" },
  { blur: 13.168724279835391, gradient: "80%, rgba(0, 0, 0, 1) 100%" },
  { blur: 16.666666666666668, gradient: "90%, rgba(0, 0, 0, 1) 100%" },
];

const BlurLayers = () => {
  return (
    <div className="blur-container z-50 ">
      {blurLayers.map((layer, index) => (
        <div
          key={index}
          className="blur-layer"
          style={{
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${layer.gradient})`,
            WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${layer.gradient})`,
            zIndex: index + 1,
          }}
        />
      ))}
      <style jsx>{`
        .blur-container {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 100px; /* Adjust the height as needed */
        }

        .blur-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default BlurLayers;
