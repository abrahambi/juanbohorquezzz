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
    description: "Financial analytics report with key performance indicators",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiYTFkZjkxNWEtM2Q0Yi00NmMzLWExM2MtOTgzYWUzN2E0ODRjIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Sales Analytics Report",
    slug: "sales-analytics",
    thumbnail: thumbnailSales,
    description: "Sales analytics with revenue KPIs & trends",
    externalUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZDkwZjVjYjktYzQwNi00NTc3LTg3YWEtMjMzNmVhODhkOTM0IiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Customer Insights Dashboard",
    slug: "customer-insights",
    thumbnail: thumbnailCustomer,
    description: "Customer behavior insights and segmentation dashboard",
    externalUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZmI0OWU2MTUtMzIyNC00MGM4LTkwMmUtMzYyNzA1MGYxOTdlIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Budget Dashboard",
    slug: "budget-dashboard",
    thumbnail: thumbnailBudget,
    description: "Budget tracking and allocation analysis",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiOGIyNDhmMDMtMzA2MS00ZDJkLTg0MWQtYWM1ZjcyNzRkZDY0IiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Marketing Metrics Report",
    slug: "marketing-metrics",
    thumbnail: thumbnailMarketing,
    description: "Marketing campaign metrics and ROI analysis",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiYmE3M2UxMWEtZThlMS00ZTY4LWI0NzMtNThkN2IxMWVlZTZhIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
  {
    title: "Facebook Dashboard",
    slug: "facebook-dashboard",
    thumbnail: thumbnailFacebook,
    description: "Facebook social media analytics dashboard",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiODA3ZWI2MDEtYzRmYi00NTUwLWIwNWUtNzIyZWZlMDQyZWJhIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9&pageName=ReportSection",
  },
  {
    title: "Sales Dashboard",
    slug: "sales-dashboard",
    thumbnail: thumbnailSalesDash,
    description: "Comprehensive sales performance dashboard",
    externalUrl:
      "https://app.fabric.microsoft.com/view?r=eyJrIjoiOTRlNTBlNzMtNDRhMi00Y2YzLWE5ZTYtYmRiOTczZjkyMzJkIiwidCI6ImFkMjE3NTNiLWNkZWItNDU1Yi1hZGI3LTc0MDg3YjFhMTM2OCJ9",
  },
] as const satisfies ProjectPreview[];
