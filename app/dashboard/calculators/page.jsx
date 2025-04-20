"use client";
import CagrCalculator from "@/components/calculators/cagr_calculator";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";

export default function SipCalculator() {
  return (
    <DashboardLayout>
      <SipCalculator />
      <CagrCalculator />
    </DashboardLayout>
  );
}
