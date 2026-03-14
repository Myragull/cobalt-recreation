// "use client"
// import { motion} from "framer-motion"


// const particleVariants = {
//   initial: { opacity: 0, y: 0 },
//   animate: {
//     y: "-50vh",
//     opacity: [0.5, 1, 1,1,0.5,0],
//   }
// }

// export default function Particles() {

//  const particles = [
//     { id: 1, size: "w-1.5 h-1.5", delay: -2 },
//     { id: 2, size: "w-1 h-1", delay: -1 },
//     { id: 3, size: "w-1.5 h-1.5", delay: -3 },
//     { id: 4, size: "w-1 h-1", delay: -1 },
//     { id: 5, size: "w-1 h-1", delay: -4 },
//     { id: 6, size: "w-1.5 h-1.5", delay: 0},
//     { id: 7, size: "w-1 h-1", delay: -2 },
//     { id: 8, size: "w-1.5 h-1.5", delay: -4 },
//     { id: 9, size: "w-1 h-1", delay: 0 },
//     { id: 10, size: "w-1 h-1", delay: -5 },
//      { id: 11, size: "w-1.5 h-1.5", delay: -2 },
//     { id: 12, size: "w-1 h-1", delay: -1 },
//     { id: 13, size: "w-1.5 h-1.5", delay: -3 },
//     { id: 14, size: "w-1 h-1", delay: -1 },
//     { id: 15, size: "w-1 h-1", delay: -4 },
//     { id: 16, size: "w-1.5 h-1.5", delay: 0},
//     { id: 17, size: "w-1 h-1", delay: -2 },
//     { id: 18, size: "w-1.5 h-1.5", delay: -4 },
//     { id: 19, size: "w-1 h-1", delay: 0 },
//     { id: 20, size: "w-1 h-1", delay: -5 },
//   ];

//   return (
//     <div className="absolute inset-0 z-0 mx-auto max-w-5xl pointer-events-none h-[93vh] overflow-hidden border border-amber-300">
// <motion.div
// initial="initial"
// animate="animate"
// className="absolute inset-0 w-full">
// {particles.map((particle) => (
//         <motion.div
//             key={particle.id}
//             variants={particleVariants}
//             transition={{
//               duration:8,
//               ease:"linear",
//               repeat:Infinity,
//               delay:particle.delay,
//               repeatType:"loop",              
//             }}
//             className={`${particle.size}  bg-amber-500 rounded-full mb-4`}
//           />
//         ))}
//       </motion.div>
//     </div>

//   );
// }

"use client"
import { motion } from "framer-motion"

const particleVariants = {
  initial: { opacity: 0, y: 0 },
  animate: {
    y: "-63vh", 
    opacity: [0, 1, 1, 0],
  }
}

export default function Particles() {
  const particles = [
    { id: 1, size: "w-1 h-1", delay: -1 },
    { id: 2, size: "w-0.8 h-0.8", delay: -11 },
    { id: 3, size: "w-0.8 h-0.8", delay: -3 },
    { id: 4, size: "w-0.5 h-0.5", delay: -25 },
    { id: 5, size: "w-0.8 h-0.8", delay: -6 },
    { id: 6, size: "w-0.9 h-0.9", delay: 0 },
    { id: 7, size: "w-0.8 h-0.8", delay: -20 },
    { id: 8, size: "w-0.5 h-0.5", delay: -17 },
    { id: 9, size: "w-0.7 h-0.7", delay: -22 },
    { id: 10, size: "w-0.1 h-0.1", delay: -8 },
    { id: 11, size: "w-0.7 h-0.7", delay: -15 },
    { id: 12, size: "w-0.7 h-0.7", delay: -28 },
    { id: 13, size: "w-0.6 h-0.6", delay: -23 },
    { id: 14, size: "w-0.8 h-0.8", delay: -11 },
    { id: 15, size: "w-0.5 h-0.5", delay: -2 },
    { id: 16, size: "w-0.6 h-0.6", delay: -11 },
    { id: 17, size: "w-0.5 h-0.5", delay: -3 },
    { id: 18, size: "w-0.6 h-0.6", delay: -15 },
    { id: 19, size: "w-0.8 h-0.8", delay: -7},
    { id: 20, size: "w-0.5 h-0.", delay: -19 },
    { id: 20, size: "w-0.5 h-0.5", delay: -30 },
    { id: 21, size: "w-1 h-1", delay: -6 },
    { id: 22, size: "w-0.8 h-0.8", delay: -18 },
    { id: 23, size: "w-1 h-0.5", delay: -13 },
    { id: 24, size: "w-0.8 h-0.8", delay: -1 },
    { id: 25, size: "w-0.9 h-0.9", delay: -30 },
    { id: 26, size: "w-0.8 h-0.8", delay: 0 },
    { id: 27, size: "w-0.5 h-0.5", delay: -12 },
    { id: 28, size: "w-0.8 h-0.8", delay: -14 },
    { id: 29, size: "w-0.8 h-0.8", delay: 40 },
    { id: 30, size: "w-0.5 h-0.", delay: -37 },
    { id: 31, size: "w-0.9 h-0.9", delay: -14 },
    { id: 32, size: "w-0.8 h-0.8", delay: 0 },
    { id: 33, size: "w-0.5 h-0.5", delay: -19 },
    { id: 34, size: "w-0.8 h-0.8", delay: -4 },
    { id: 35, size: "w-0.8 h-0.8", delay: 0 },
    { id: 36, size: "w-0.9 h-0.9", delay: -21 },
    { id: 37, size: "w-0.5 h-0.5", delay: -12 },
    { id: 38, size: "w-0.8 h-0.8", delay: -9 },
    { id: 39, size: "w-0.8 h-0.8", delay: 20 },
    { id: 40, size: "w-0.5 h-0.", delay: -10 },
    { id: 41, size: "w-0.9 h-0.9", delay: -2 },
    { id: 42, size: "w-0.8 h-0.8", delay: 0 },
    { id: 43, size: "w-0.5 h-0.5", delay: -22 },
    { id: 44, size: "w-0.8 h-0.8", delay: -4 },
    { id: 45, size: "w-0.8 h-0.8", delay: -15 },
    { id: 46, size: "w-0.9 h-0.9", delay: -1 },
     { id: 1, size: "w-1 h-1", delay: -1 },
    { id: 2, size: "w-0.8 h-0.8", delay: -11 },
    { id: 3, size: "w-0.8 h-0.8", delay: -3 },
    { id: 4, size: "w-0.5 h-0.5", delay: -15 },
    { id: 5, size: "w-0.8 h-0.8", delay: -6 },
    { id: 6, size: "w-0.9 h-0.9", delay: 0 },
    { id: 7, size: "w-0.8 h-0.8", delay: -20 },
    { id: 8, size: "w-0.5 h-0.5", delay: -17 },
    { id: 9, size: "w-0.7 h-0.7", delay: -22 },
    { id: 10, size: "w-0.1 h-0.1", delay: -8 },
    { id: 11, size: "w-0.7 h-0.7", delay: -15 },
    { id: 12, size: "w-0.7 h-0.7", delay: -18 },
    { id: 13, size: "w-0.6 h-0.6", delay: -23 },
    { id: 14, size: "w-0.8 h-0.8", delay: -11 },
    { id: 15, size: "w-0.5 h-0.5", delay: -22 },
    { id: 16, size: "w-0.6 h-0.6", delay: -1 },
    { id: 17, size: "w-0.5 h-0.5", delay: -13 },
    { id: 18, size: "w-0.6 h-0.6", delay: -5 },
    { id: 19, size: "w-0.8 h-0.8", delay: -17},
    { id: 20, size: "w-0.5 h-0.", delay: -9 },
    { id: 20, size: "w-0.5 h-0.5", delay: -24 },
    { id: 21, size: "w-1 h-1", delay: -2 },
    { id: 22, size: "w-0.8 h-0.8", delay: -15 },
    { id: 23, size: "w-1 h-0.5", delay: -23 },
    { id: 24, size: "w-0.8 h-0.8", delay: -11 },
    { id: 25, size: "w-0.9 h-0.9", delay: -35 },
    { id: 26, size: "w-0.8 h-0.8", delay: 7 },
    { id: 27, size: "w-0.5 h-0.5", delay: -10 },
    { id: 28, size: "w-0.8 h-0.8", delay: -9 },
    { id: 29, size: "w-0.8 h-0.8", delay: 28 },
      { id: 3, size: "w-0.8 h-0.8", delay: -3 },
    { id: 4, size: "w-0.5 h-0.5", delay: -15 },
    { id: 5, size: "w-0.8 h-0.8", delay: -6 },
    { id: 6, size: "w-0.9 h-0.9", delay: 0 },
    { id: 7, size: "w-0.8 h-0.8", delay: -20 },
    { id: 8, size: "w-0.5 h-0.5", delay: -17 },
    { id: 9, size: "w-0.7 h-0.7", delay: -22 },
    { id: 10, size: "w-0.1 h-0.1", delay: -8 },
    { id: 11, size: "w-0.7 h-0.7", delay: -15 },
    { id: 12, size: "w-0.7 h-0.7", delay: -18 },
    { id: 13, size: "w-0.6 h-0.6", delay: -23 },
    { id: 14, size: "w-0.8 h-0.8", delay: -11 },
    { id: 15, size: "w-0.5 h-0.5", delay: -22 },
    { id: 16, size: "w-0.6 h-0.6", delay: -1 },
    { id: 17, size: "w-0.5 h-0.5", delay: -13 },
    { id: 18, size: "w-0.6 h-0.6", delay: -5 },
    { id: 19, size: "w-0.8 h-0.8", delay: -17},
    { id: 30, size: "w-0.5 h-0.", delay: -31 },
    { id: 31, size: "w-0.9 h-0.9", delay: -14 },
    { id: 32, size: "w-0.8 h-0.8", delay: 1 },
    { id: 33, size: "w-0.5 h-0.5", delay: -16 },
    { id: 34, size: "w-0.8 h-0.8", delay: -6 },
    { id: 35, size: "w-0.8 h-0.8", delay: 0 },
    { id: 36, size: "w-0.9 h-0.9", delay: -23 },
    { id: 37, size: "w-0.5 h-0.5", delay: -18 },
    { id: 38, size: "w-0.8 h-0.8", delay: -7 },
    { id: 39, size: "w-0.8 h-0.8", delay: 24 },
    { id: 40, size: "w-0.5 h-0.", delay: -14 },
    { id: 41, size: "w-0.9 h-0.9", delay: -4 },
    { id: 42, size: "w-0.8 h-0.8", delay: 0 },
    { id: 43, size: "w-0.5 h-0.5", delay: -20 },
    { id: 44, size: "w-0.8 h-0.8", delay: -1 },
    { id: 45, size: "w-0.8 h-0.8", delay: -17 },
    { id: 46, size: "w-0.9 h-0.9", delay: -22 },
      { id: 31, size: "w-0.9 h-0.9", delay: -19 },
    { id: 32, size: "w-0.8 h-0.8", delay: 11 },
    { id: 33, size: "w-0.5 h-0.5", delay: -16 },
    { id: 34, size: "w-0.8 h-0.8", delay: -6 },
    { id: 35, size: "w-0.8 h-0.8", delay: 0 },
    { id: 36, size: "w-0.9 h-0.9", delay: -23 },
    { id: 37, size: "w-0.5 h-0.5", delay: -11 },
    { id: 38, size: "w-0.8 h-0.8", delay: -7 },
    { id: 39, size: "w-0.8 h-0.8", delay: 21 },
    { id: 40, size: "w-0.5 h-0.", delay: -1 },
    { id: 41, size: "w-0.9 h-0.9", delay: -14 },
    { id: 42, size: "w-0.8 h-0.8", delay: 10 },
    { id: 43, size: "w-0.5 h-0.5", delay: -20 },
    { id: 44, size: "w-0.8 h-0.8", delay: -11 },
    { id: 45, size: "w-0.8 h-0.8", delay: -27 },
    { id: 46, size: "w-0.9 h-0.9", delay: -2 },
  ];

  return (
    <div className="absolute inset-0 z-0 mx-auto max-w-5xl pointer-events-none h-[95vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              position: "absolute",
              // MATH: This spreads 20 particles across 100% of the width
              // Particle 0 is at 0%, Particle 10 is at 50%, Particle 20 is at 100%
              left: `${(index / (particles.length - 1)) * 100}%`,
              bottom: "-20px"
            }}
            className={`${particle.size} bg-[#adadb2eb] rounded-full`}
          />
        ))}
      </div>
    </div>
  );
}
