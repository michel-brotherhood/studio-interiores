import { motion } from "framer-motion";

export default function Metrics() {
  const metrics = [
    { label: "Client served", value: "150" },
    { label: "Awards won", value: "5" },
    { label: "Project rating", value: "4.9" },
    { label: "Projects completed", value: "190" },
    { label: "Years of experience", value: "+10" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {metric.label}
              </p>
              <p className="text-5xl md:text-6xl font-bold text-foreground">
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
