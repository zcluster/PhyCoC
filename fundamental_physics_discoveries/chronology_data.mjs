// Human-readable dates plus sortable chronology keys.
// BCE years are negative. Fractional keys order events within the same year.
export const chronology = {
  "01_atomistic_hypothesis.md": {
    discovery: ["fifth century BCE (c. 440 BCE display anchor, not a dated synthesis)", -440],
    pathways: {
      "R-CONTINUOUS-MATTER": ["sixth–fifth centuries BCE antecedents; Aristotle's systematic continuum is later and is not a pre-atomist input", -500],
      "R-FOUR-ELEMENTS": ["mid-fifth century BCE (Empedocles' four-root doctrine); its relative order versus early atomist formulations is uncertain, and the numerical key is only for display", -450],
    },
  },
  "02_hydrostatics_and_buoyancy.md": {
    discovery: ["third century BCE (c. 250 BCE display anchor; treatise date uncertain)", -250],
    pathways: {
      "R-SHAPE-ONLY-FLOATING": ["pre-third-century practical floating knowledge (analytic foil, not an attested school)", -400],
      "R-ELEMENTAL-PLACE": ["c. 350 BCE (Aristotelian natural-place theory)", -350],
    },
  },
  "03_heliocentric_planetary_system.md": {
    discovery: ["1543 (*De revolutionibus*)", 1543],
    pathways: {
      "R-PTOLEMAIC-GEOCENTRIC": ["c. 150 CE (*Almagest*)", 150],
      "R-ARISTARCHAN-HELIOCENTRISM": ["c. 270 BCE", -270],
      "R-HERACLIDEAN-PARTIAL-GEOKINETIC": ["c. 350 BCE, with later medieval variants", -350],
    },
  },
  "04_keplers_laws_of_planetary_motion.md": {
    discovery: ["1609 (first two laws); 1619 (third law)", 1609],
    pathways: {
      "R-PERFECT-CIRCLES": ["antiquity through the sixteenth century", -350],
      "R-KEPLER-POLYHEDRAL": ["1596 (*Mysterium Cosmographicum*)", 1596],
      "R-KEPLER-OVAL-INTERMEDIATE": ["c. 1601–1605", 1601],
    },
  },
  "05_galilean_kinematics.md": {
    discovery: ["1638 synthesis in *Two New Sciences* (work developed from c. 1604)", 1638],
    pathways: {
      "R-SPEED-PROPORTIONAL-WEIGHT": ["fourth century BCE and later Aristotelian tradition", -350],
      "R-PROJECTILE-TWO-STAGES": ["sixth–fourteenth centuries CE", 550],
      "R-ARISTOTELIAN-NATURAL-VIOLENT-MOTION": ["fourth century BCE", -350],
    },
  },
  "07_newtonian_mechanics.md": {
    discovery: ["1684–1687 synthesis; *Principia* issued in July 1687", 1687],
    pathways: {
      "T-ARISTOTELIAN-MOTION": ["Fourth century BCE onward; the core Aristotelian texts long predate 1687", -350],
      "T-IMPETUS": ["Sixth–fourteenth centuries CE, with major medieval formulations well before 1687", 550],
      "T-CARTESIAN-VORTICES": ["Principally 1644–1680s; Descartes's published vortex cosmology predates Newton's 1687 synthesis", 1644],
    },
  },
  "09_wave_theory_and_interference.md": {
    discovery: ["1801–1818 (Young interference through Fresnel diffraction)", 1818],
    pathways: {
      "R-NEWTONIAN-CORPUSCLES": ["1672–1704", 1672],
      "R-LONGITUDINAL-LIGHT-WAVES": ["1690–1801", 1690],
      "R-TRANSVERSE-ELASTIC-ETHER": ["1817 (Young's transverse-wave proposal)", 1817],
    },
  },
  "11_thermodynamics_and_energy_conservation.md": {
    discovery: ["1843–1850 mechanical equivalent of heat and first-law synthesis", 1847],
    pathways: {
      "R-CALORIC-CONSERVATION": ["late eighteenth century–1840s", 1780],
      "R-HEAT-AS-SIMPLE-MOTION": ["seventeenth century–early 1840s", 1650],
      "R-PERPETUAL-MOTION-FIRST-KIND": ["medieval proposals through the early nineteenth century", 1200],
    },
  },
  "15_classical_statistical_mechanics.md": {
    discovery: ["1859–1902 (Maxwell/Boltzmann through Gibbs)", 1902],
    pathways: {
      "R-PURE-MECHANICAL-DEDUCTION": ["nineteenth-century mechanical program", 1800],
      "R-ENERGETICS-WITHOUT-ATOMS": ["1890s", 1890],
      "R-RECURRENCE-REFUTES-STATISTICS": ["1896 (Zermelo's objection)", 1896],
      "R-NAIVE-ERGODICITY": ["1870s", 1870],
    },
  },
  "13_maxwell_electromagnetic_field_theory.md": {
    discovery: ["1861–1865", 1865],
    pathways: {
      "R-SEPARATE-ELECTRIC-MAGNETIC-FLUIDS": ["eighteenth–early nineteenth centuries", 1730],
      "R-MECHANICAL-ETHER-MODELS": ["seventeenth century–1860s", 1650],
      "R-INSTANTANEOUS-ELECTROMAGNETIC-ACTION": ["1785–1850s", 1785],
      "R-AMPERE-WITHOUT-DISPLACEMENT-CURRENT": ["1820s", 1820],
    },
  },
  "14_energy_quantization.md": {
    discovery: ["14 December 1900 (Planck's energy-element derivation)", 1900.95],
    pathways: {
      "R-CLASSICAL-EQUIPARTITION-RADIATION": ["June 1900 (Rayleigh's classical result)", 1900.45],
      "R-WIEN-ONLY": ["1896", 1896],
      "R-AD-HOC-BLACKBODY-INTERPOLATION": ["October 1900, before Planck's statistical derivation", 1900.8],
    },
  },
  "17_special_relativity.md": {
    discovery: ["30 June 1905 submission", 1905.5],
    pathways: {
      "R-ABSOLUTE-SIMULTANEITY": ["antiquity through 1905", -350],
      "R-GALILEAN-TRANSFORMATION": ["1632–1638 origins; standard nineteenth-century form", 1632],
      "R-LORENTZ-ETHER-KINEMATICS": ["1892–1904", 1892],
    },
  },
  "16_light_quanta_and_photoelectric_effect.md": {
    discovery: ["17 March 1905 submission", 1905.21],
    pathways: {
      "R-CLASSICAL-ENERGY-ACCUMULATION": ["nineteenth century–1904", 1860],
    },
  },
  "18_quantized_atomic_structure.md": {
    discovery: ["July 1913 (Bohr trilogy begins)", 1913.55],
    pathways: {
      "R-CLASSICAL-PLANETARY-ATOM": ["1911–1912", 1911],
      "R-THOMSON-DIFFUSE-ATOM": ["1904", 1904],
      "R-NICHOLSON-PROTOQUANTIZED-ATOM": ["1911–1912", 1911.2],
    },
  },
  "19_general_relativity.md": {
    discovery: ["25 November 1915 field equations", 1915.9],
    pathways: {
      "R-SCALAR-GRAVITY": ["1912–1914", 1912],
      "R-NEWTONIAN-ABSOLUTE-GRAVITY": ["1687", 1687],
      "R-FLAT-SPACETIME-RELATIVISTIC-FORCE-GRAVITY": ["1905–1914", 1905],
    },
  },
  "25_expanding_universe.md": {
    discovery: ["1922–1929 (Friedmann/Lemaître through Hubble)", 1929],
    pathways: {
      "R-STATIC-UNIVERSE": ["1917 (Einstein static model)", 1917],
      "R-DE-SITTER-STATIC-REDSHIFT": ["1917", 1917.1],
    },
  },
  "24_quantum_mechanics.md": {
    discovery: ["1925–1927", 1927.8],
    pathways: {
      "R-BOHR-SOMMERFELD": ["1913–1924", 1913],
      "R-CLASSICAL-DEFINITE-TRAJECTORIES": ["seventeenth century–1924", 1650],
      "R-MATRIX-MECHANICS-AS-UNIQUE-ONTOLOGY": ["1925", 1925],
      "R-LITERAL-THREE-DIMENSIONAL-MATTER-WAVE": ["1923–1926", 1923],
    },
  },
  "22_quantum_statistics.md": {
    discovery: ["1924–1926", 1926.9],
    pathways: {
      "R-MAXWELL-BOLTZMANN-ALL-PARTICLES": ["1860s–1870s", 1860],
      "R-HEISENBERG-BOSE-PAULI-IDENTIFICATION": ["1926", 1926],
      "R-PAULI-RULE-WITHOUT-STATE-ANTISYMMETRY": ["1925", 1925],
      "R-CLASSICAL-ROTATING-SPIN": ["1925–1926", 1925.5],
    },
  },
  "26_relativistic_quantum_theory_and_antimatter.md": {
    discovery: ["1928 theory; 1932 positron discovery", 1932.7],
    pathways: {
      "R-NONRELATIVISTIC-ELECTRON-ONLY": ["1925–1926", 1925],
      "R-LITERAL-DIRAC-SEA": ["1930", 1930],
      "R-KLEIN-GORDON-SINGLE-PARTICLE-PROBABILITY": ["1926", 1926],
      "R-SQUARE-ROOT-RELATIVISTIC-SCHRODINGER": ["1926–1927", 1926.2],
    },
  },
  "29_nuclear_interactions_and_beta_decay.md": {
    discovery: ["1932–1938 synthesis", 1938],
    pathways: {
      "R-NUCLEAR-ELECTRONS": ["1910s–1932", 1910],
      "R-ELECTROMAGNETIC-BINDING-ONLY": ["pre-1932", 1920],
      "R-MICROSCOPIC-ENERGY-NONCONSERVATION": ["1930", 1930],
      "R-WENZEL-BOSE-FIELD": ["1937", 1937],
      "R-ELEMENTARY-YUKAWA-MESON-AS-FUNDAMENTAL-FORCE": ["1935", 1935],
    },
  },
  "30_quantum_electrodynamics.md": {
    discovery: ["1947–1949 renormalized QED", 1949.9],
    pathways: {
      "R-UNRENORMALIZED-POINT-PARTICLE-PERTURBATION": ["late 1920s–1940s", 1928],
      "R-CLASSICAL-RADIATION-ONLY": ["nineteenth century–1920s", 1860],
      "R-HOLE-THEORY-QED": ["1930s", 1930],
      "R-LITERAL-UV-CUTOFF-ELECTRON-SIZE": ["1930s–1940s", 1930.2],
      "R-AD-HOC-INFINITY-SUBTRACTION": ["1930s–1947", 1930.3],
    },
  },
  "33_quarks_and_strong_interaction.md": {
    discovery: ["January–February 1964 quark-model manuscripts and publication", 1964.08],
    pathways: {
      "R-ELEMENTARY-HADRON-ZOO": ["1940s–early 1960s", 1945],
      "R-SAKATA-HADRON-CONSTITUENTS": ["1956", 1956],
      "R-EIGHTFOLD-WAY-AS-CLASSIFICATION-ONLY": ["1961", 1961],
      "R-HADRONIC-BOOTSTRAP-PRE-QUARK": ["late 1950s–1963", 1958],
    },
  },
  "34_higgs_mechanism.md": {
    discovery: ["1964 BEH-mechanism papers", 1964.7],
    pathways: {
      "R-EXPLICIT-VECTOR-MASS": ["1936 (Proca)", 1936],
      "R-GLOBAL-BROKEN-SYMMETRY": ["1960–1962", 1960],
      "R-STUECKELBERG-MASS": ["1938", 1938],
    },
  },
  "35_bells_theorem.md": {
    discovery: ["November 1964 publication", 1964.9],
    pathways: {
      "R-LOCAL-HIDDEN-VARIABLE-COMPLETION": ["1935–1964", 1935],
      "R-BOHMIAN-NONLOCAL-COMPLETION": ["1952", 1952],
    },
  },
  "38_electroweak_theory.md": {
    discovery: ["1961–1973 (gauge proposal through neutral-current discovery)", 1973.8],
    pathways: {
      "R-FERMI-FUNDAMENTAL-CONTACT": ["1934", 1934],
      "R-EXPLICIT-MASSIVE-YANG-MILLS": ["1950s", 1955],
      "R-CHARGED-INTERMEDIATE-BOSON-ONLY": ["1950s–1960s", 1955.2],
    },
  },
  "37_quantum_chromodynamics.md": {
    discovery: ["1973 asymptotic-freedom formulation", 1973.5],
    pathways: {
      "R-STRONG-COUPLING-AT-ALL-SCALES": ["1950s–1960s", 1950],
      "R-COLOR-SINGLET-GLUON": ["1960s–1972", 1965],
      "R-HADRONIC-BOOTSTRAP": ["late 1950s–1960s", 1958],
      "R-PARTON-MODEL-WITHOUT-DYNAMICS": ["1969", 1969],
    },
  },
  "40_standard_model.md": {
    discovery: ["1973–1979 consolidation", 1979.9],
    pathways: {
      "R-INDEPENDENT-PARTICLE-FORCES": ["pre-1961 phenomenological patchwork", 1950],
      "R-ELEMENTARY-HADRON-ZOO-STANDARD-MODEL": ["1940s–1963", 1945],
      "R-FUNDAMENTAL-MESON-EXCHANGE-STRONG-FORCE": ["1935–1960s", 1935],
    },
  },
  "41_cosmic_inflation.md": {
    discovery: ["1981–1982 broad slow-roll/new-inflation formulation", 1982.9],
    pathways: {
      "R-OLD-INFLATION": ["1980–1981", 1980],
      "R-UNEXPLAINED-SPECIAL-INITIAL-CONDITIONS": ["pre-1980 standard cosmological assumption", 1970],
      "R-MIXMASTER-CHAOTIC-COSMOLOGY": ["1969", 1969],
    },
  },
  "20_noethers_theorem_and_symmetry.md": {
    discovery: ["July 1918 presentation and 1918 publication", 1918.57],
    pathways: {
      "R-CASE-BY-CASE-CONSERVATION": ["seventeenth century–1917", 1650],
      "R-COORDINATE-CYCLICITY-AS-ULTIMATE-CAUSE": ["late eighteenth century–1917", 1788],
      "R-ORDINARY-DIVERGENCE-GR-ENERGY": ["1915–1917", 1915],
    },
  },
  "23_quantum_field_theory.md": {
    discovery: ["1927 Dirac radiation-field quantization", 1927.17],
    pathways: {
      "R-FIXED-PARTICLE-RELATIVISTIC-QUANTUM-MECHANICS": ["1925–1926", 1925],
      "R-QUANTIZED-MATTER-CLASSICAL-RADIATION": ["1900–1926", 1900],
      "R-OSCILLATOR-QUANTA-WITHOUT-FIELD-OPERATORS": ["1900–1926", 1900.1],
    },
  },
  "27_quantum_entanglement.md": {
    discovery: ["1935 EPR paper and Schrödinger's entanglement analysis", 1935.8],
    pathways: {
      "R-SEPARABLE-COMPOSITE-STATE": ["classical statistical tradition through 1934", 1800],
      "R-WAVEFUNCTION-AS-COMPLETE-LOCAL-PROPERTIES": ["1926–1934", 1926],
      "R-EPR-LOCAL-COMPLETE-QM": ["March–May 1935 before Schrödinger's explicit entanglement formulation", 1935.2],
    },
  },
  "28_landau_phase_transitions_and_symmetry_breaking.md": {
    discovery: ["1937 Landau phase-transition theory", 1937.5],
    pathways: {
      "R-EHRENFEST-DERIVATIVE-ORDER-CLASSIFICATION": ["1933–1936", 1933],
      "R-WEISS-MOLECULAR-FIELD-AS-LITERAL-FIELD": ["1907–1936", 1907],
      "R-MICROSCOPIC-MODEL-FOR-EACH-TRANSITION": ["1900s–1936", 1900],
    },
  },
  "31_yang_mills_gauge_theory.md": {
    discovery: ["October 1954 publication", 1954.75],
    pathways: {
      "R-GLOBAL-ISOSPIN-ONLY": ["1932–1953", 1932],
      "R-YUKAWA-MESON-FUNDAMENTAL-FORCE": ["1935–1953", 1935],
    },
  },
  "32_bcs_theory_of_superconductivity.md": {
    discovery: ["December 1957 full BCS theory", 1957.9],
    pathways: {
      "R-PERFECT-CONDUCTOR-ONLY": ["1911–1933", 1911],
      "R-CLASSICAL-ELECTRON-ORDERING": ["1911–1940s", 1911.1],
      "R-LONDON-PHENOMENOLOGY-AS-MICROSCOPIC-THEORY": ["1935–1956", 1935],
      "R-BOSONIC-ELECTRON-MOLECULES": ["1940s–1955", 1940],
    },
  },
  "36_wilsonian_renormalization_group.md": {
    discovery: ["November 1971 Wilson renormalization-group papers", 1971.83],
    pathways: {
      "R-LANDAU-MEAN-FIELD-EXACT-CRITICALITY": ["1937–1960s", 1937],
      "R-SCALING-HYPOTHESIS-WITHOUT-FLOW": ["1959–1970", 1959],
    },
  },
  "39_effective_field_theory.md": {
    discovery: ["1979 Weinberg phenomenological-Lagrangian synthesis", 1979.25],
    pathways: {
      "R-NONRENORMALIZABLE-MEANS-NONPREDICTIVE": ["late 1940s–1960s", 1947],
      "R-ONE-PHENOMENOLOGICAL-VERTEX": ["1934–1970s", 1934],
      "R-UV-COMPLETION-FIRST": ["reductionist programs through the 1970s", 1950],
      "R-HARD-CUTOFF-AS-LITERAL-MICROPHYSICS": ["1930s–1960s", 1930],
    },
  },
  "21_de_broglie_matter_waves.md": {
    discovery: ["1923 notes; 25 November 1924 thesis defense", 1924.9],
    pathways: {
      "R-CLASSICAL-MATTER-PARTICLES-ONLY": ["seventeenth century–1923", 1650],
      "R-WAVES-REQUIRE-MATERIAL-MEDIUM": ["seventeenth century–early 1920s", 1650.1],
      "R-BOHR-SOMMERFELD-QUANTIZATION-AS-POSTULATE": ["1913–1923", 1913],
      "R-RADIATION-DUALITY-WITHOUT-MATTER-RECIPROCITY": ["1905–1923", 1905],
    },
  },
  "06_fermat_principle.md": {
    discovery: ["1662 mature least-time derivation of refraction", 1662],
    pathways: {
      "R-SHORTEST-DISTANCE-ALL-RAYS": ["antiquity through the early seventeenth century", 60],
      "R-DESCARTES-MECHANICAL-REFRACTION": ["1637 (*La Dioptrique*)", 1637],
      "R-LOCAL-SNELL-LAW-WITHOUT-GENERATOR": ["1621–1662", 1621],
    },
  },
  "08_lagrangian_mechanics.md": {
    discovery: ["1788 publication of *Méchanique analitique*", 1788],
    pathways: {
      "R-CARTESIAN-COMPONENT-MECHANICS": ["late seventeenth–eighteenth centuries", 1687],
      "R-EXPLICIT-CONSTRAINT-REACTIONS": ["seventeenth–eighteenth centuries", 1650],
      "R-MAUPERTUIS-METAPHYSICAL-ACTION": ["1744 onward", 1744],
      "R-DALEMBERT-WITHOUT-SYSTEMATIC-COORDINATES": ["1743–1750s", 1743],
    },
  },
  "10_hamiltonian_mechanics.md": {
    discovery: ["1834–1835 Hamiltonian dynamics synthesis", 1834.5],
    pathways: {
      "R-DIRECT-TRAJECTORY-INTEGRATION": ["seventeenth century–1833", 1650],
      "R-CONFIGURATION-VELOCITY-ONLY": ["1788–1833", 1788],
      "R-OPTICS-DYNAMICS-SEPARATION": ["seventeenth century–1833", 1650.1],
    },
  },
  "12_second_law_of_thermodynamics.md": {
    discovery: ["1850–1865 Clausius/Kelvin formulations through entropy", 1850],
    pathways: {
      "R-ENGINE-SPECIFIC-OPTIMIZATION": ["eighteenth century–1823", 1700],
      "R-CALORIC-HEAT-DROP": ["late eighteenth century–1824 Carnot formulation", 1780],
      "R-FIRST-LAW-SUFFICIENT": ["1840s–1849 implicit conservation-only reasoning", 1840],
      "R-IRREVERSIBILITY-AS-FRICTION-ONLY": ["early nineteenth century–1849", 1800],
    },
  },
};
