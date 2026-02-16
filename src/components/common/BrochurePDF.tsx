// BrochurePDF.tsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import {
  services,
  products,
  industries,
  coreValues,
} from "../../data/websiteData";

/**
 * GEMINI NEXATECH PDF DESIGN SYSTEM
 * Colors matched to Brand Identity:
 * Blue: #013299
 * Orange: #fd8e18
 * Dark Background: #000510
 */

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },

  // --- HEADER SECTIONS ---
  headerBanner: {
    backgroundColor: "#000510",
    padding: 30,
    paddingTop: 45,
    borderRadius: 8,
    marginBottom: 25,
    textAlign: "center",
  },
  brandName: {
    fontSize: 34,
    fontFamily: "Helvetica-Bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 10,
    color: "#fd8e18",
    marginTop: 8,
    textTransform: "uppercase",
    letterSpacing: 3,
    fontFamily: "Helvetica-Bold",
  },
  accentLine: {
    width: 60,
    height: 3,
    backgroundColor: "#fd8e18",
    marginTop: 20,
    alignSelf: "center",
  },

  // --- CONTENT BLOCKS ---
  sectionHeader: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#013299",
    marginBottom: 12,
    marginTop: 15,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    paddingBottom: 4,
  },
  mainDescription: {
    fontSize: 10.5,
    lineHeight: 1.6,
    color: "#444444",
    marginBottom: 20,
    textAlign: "justify",
  },

  // --- MISSION/VISION GRID ---
  mvContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  mvBox: {
    flex: 1,
    padding: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  mvLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#fd8e18",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  mvText: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: "#333333",
    fontFamily: "Helvetica-Oblique",
  },

  // --- GRID SYSTEM ---
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#F9FAFB",
    borderRadius: 4,
    borderLeftWidth: 2,
    borderLeftColor: "#013299",
  },
  gridTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
    marginBottom: 3,
  },
  gridDesc: {
    fontSize: 8.5,
    color: "#666666",
    lineHeight: 1.4,
  },

  // --- FOOTER & CONTACT ---
  contactStrip: {
    marginTop: "auto",
    backgroundColor: "#013299",
    padding: 20,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactCol: {
    flex: 1,
  },
  contactHeading: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  contactDetail: {
    fontSize: 9,
    color: "#CBD5E1",
    marginBottom: 3,
  },
  pageNum: {
    position: "absolute",
    bottom: 20,
    right: 40,
    fontSize: 8,
    color: "#999999",
  },
});

export const BrochurePDF = () => (
  <Document author="Gemini Nexatech" title="Company Brochure 2024">
    {/* PAGE 1: IDENTITY & FOUNDATION */}
    <Page size="A4" style={styles.page}>
      <View style={styles.headerBanner}>
        <Text style={styles.brandName}>GEMINI NEXATECH</Text>
        <Text style={styles.tagline}>Official Corporate Profile 2024</Text>
        <View style={styles.accentLine} />
        <Text
          style={{
            fontSize: 9,
            color: "#999999",
            marginTop: 20,
            fontFamily: "Helvetica-Oblique",
          }}
        >
          Where Ideas Meet Innovation.
        </Text>
      </View>

      <Text style={styles.sectionHeader}>About Our Company</Text>
      <Text style={styles.mainDescription}>
        Gemini Nexatech is a premier technology solutions provider dedicated to
        transforming business operations through smart security, precise
        tracking, and industrial automation. We leverage cutting-edge technology
        to deliver scalable, secure, and future-ready solutions tailored to the
        unique challenges of our global clients. Our expertise spans from
        high-end software development to mission-critical industrial monitoring.
      </Text>

      <View style={styles.mvContainer}>
        <View
          style={[
            styles.mvBox,
            { borderLeftColor: "#013299", borderLeftWidth: 3 },
          ]}
        >
          <Text style={styles.mvLabel}>Our Mission</Text>
          <Text style={styles.mvText}>
            "Empowering businesses with innovative technology solutions that
            drive efficiency, safety, and growth across industries worldwide."
          </Text>
        </View>
        <View
          style={[
            styles.mvBox,
            { borderLeftColor: "#fd8e18", borderLeftWidth: 3 },
          ]}
        >
          <Text style={styles.mvLabel}>Our Vision</Text>
          <Text style={styles.mvText}>
            "To be a global leader in smart, integrated, and sustainable tech
            solutions that transform operations and create lasting value."
          </Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Core Corporate Values</Text>
      <View style={styles.grid}>
        {(coreValues || []).map((val, i) => (
          <View
            key={i}
            style={[
              styles.gridItem,
              {
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#F3F4F6",
                borderLeftColor: "#fd8e18",
              },
            ]}
          >
            <Text style={styles.gridTitle}>{val.title}</Text>
            <Text style={styles.gridDesc}>{val.description}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.pageNum}>01 | Foundation</Text>
    </Page>

    {/* PAGE 2: SOLUTIONS ECOSYSTEM (SERVICES & PRODUCTS) */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionHeader}>Our Technology Services</Text>
      <Text style={[styles.mainDescription, { marginBottom: 15 }]}>
        Gemini Nexatech offers an end-to-end digital ecosystem. We don't just
        build software; we engineer competitive advantages.
      </Text>

      <View style={styles.grid}>
        {(services || []).slice(0, 8).map((svc, i) => (
          <View key={i} style={styles.gridItem}>
            <Text style={styles.gridTitle}>{svc.title}</Text>
            <Text style={styles.gridDesc}>{svc.description}</Text>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.sectionHeader}>Flagship Product Suites</Text>
        <View style={styles.grid}>
          {(products || []).map((prod, i) => (
            <View
              key={i}
              style={[styles.gridItem, { borderLeftColor: "#fd8e18" }]}
            >
              <Text style={styles.gridTitle}>{prod.title}</Text>
              <Text style={styles.gridDesc}>{prod.subtitle}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.pageNum}>02 | Solutions</Text>
    </Page>

    {/* PAGE 3: STRATEGIC IMPACT & CONTACT */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionHeader}>Key Industries We Transform</Text>
      <Text style={[styles.mainDescription, { marginBottom: 15 }]}>
        Our solutions are battle-tested in the world's most demanding sectors,
        ensuring compliance, safety, and operational continuity.
      </Text>

      <View style={styles.grid}>
        {(industries || []).map((ind, i) => (
          <View
            key={i}
            style={[
              styles.gridItem,
              {
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              },
            ]}
          >
            <View
              style={{ width: 4, height: 20, backgroundColor: "#fd8e18" }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.gridTitle}>{ind.title}</Text>
              <Text style={styles.gridDesc}>{ind.subtitle}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.sectionHeader}>Innovation at Scale</Text>
        <Text style={styles.mainDescription}>
          Gemini Nexatech operates at the intersection of Hardware, Software,
          and Strategy. From ATEX-certified sensors in Oil & Gas to AI-driven
          predictive analytics in manufacturing, we provide the full-stack
          intelligence required for the modern industrial age.
        </Text>
      </View>

      <View style={styles.contactStrip}>
        <View style={styles.contactCol}>
          <Text style={styles.contactHeading}>LETS CONNECT</Text>
          <Text style={styles.contactDetail}>contact@gemininexatech.com</Text>
          <Text style={styles.contactDetail}>+971 (0) 4 123 4567</Text>
        </View>
        <View style={[styles.contactCol, { textAlign: "right" }]}>
          <Text style={styles.contactHeading}>HEADQUARTERS</Text>
          <Text style={styles.contactDetail}>Innovation Hub, 5th Floor</Text>
          <Text style={styles.contactDetail}>Dubai Silicon Oasis, UAE</Text>
        </View>
      </View>

      <Text style={styles.pageNum}>03 | Connectivity</Text>
    </Page>
  </Document>
);
