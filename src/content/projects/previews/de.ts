import thumbnailFinancial from "../../../assets/thumbnails/financial-analytics.png";
import thumbnailSales from "../../../assets/thumbnails/sales-analytics.png";
import thumbnailCustomer from "../../../assets/thumbnails/customer-insights.png";
import thumbnailBudget from "../../../assets/thumbnails/budget-dashboard.png";
import thumbnailMarketing from "../../../assets/thumbnails/marketing-metrics.png";
import thumbnailFacebook from "../../../assets/thumbnails/facebook-dashboard.png";
import thumbnailSalesDash from "../../../assets/thumbnails/sales-dashboard.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Financial Analytics Report",
    slug: "financial-analytics",
    thumbnail: thumbnailFinancial,
    description: "Reporte de análisis financiero con indicadores clave",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiYTFkZjkxNWEtM2Q0Yi00NmMzLWExM2MtOTgzYWUzN2E0ODRjIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Sales Analytics Report",
    slug: "sales-analytics",
    thumbnail: thumbnailSales,
    description: "Análisis de ventas con KPIs e indicadores de tendencia",
    externalUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZDkwZjVjYjktYzQwNi00NTc3LTg3YWEtMjMzNmVhODhkOTM0IiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Customer Insights Dashboard",
    slug: "customer-insights",
    thumbnail: thumbnailCustomer,
    description: "Dashboard de comportamiento y segmentación de clientes",
    externalUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZmI0OWU2MTUtMzIyNC00MGM4LTkwMmUtMzYyNzA1MGYxOTdlIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Budget Dashboard",
    slug: "budget-dashboard",
    thumbnail: thumbnailBudget,
    description: "Seguimiento y análisis de asignación de presupuesto",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiOGIyNDhmMDMtMzA2MS00ZDJkLTg0MWQtYWM1ZjcyNzRkZDY0IiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Marketing Metrics Report",
    slug: "marketing-metrics",
    thumbnail: thumbnailMarketing,
    description: "Métricas de campañas de marketing y análisis de ROI",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiYmE3M2UxMWEtZThlMS00ZTY4LWI0NzMtNThkN2IxMWVlZTZhIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Facebook Dashboard",
    slug: "facebook-dashboard",
    thumbnail: thumbnailFacebook,
    description: "Dashboard de analítica de redes sociales de Facebook",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiODA3ZWI2MDEtYzRmYi00NTUwLWIwNWUtNzIyZWZlMDQyZWJhIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9&pageName=ReportSection",
  },
  {
    title: "Sales Dashboard",
    slug: "sales-dashboard",
    thumbnail: thumbnailSalesDash,
    description: "Dashboard integral de rendimiento de ventas",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiOTRlNTBlNzMtNDRhMi00Y2YzLWE5ZTYtYmRiOTczZjkyMzJkIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
] as const satisfies ProjectPreview[];
