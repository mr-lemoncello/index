<script lang="ts">
    import site_l from "$lib/assets/site_l.webp";
    import site_l2 from "$lib/assets/site_l2.webp";
    import turbidity from "$lib/assets/turbidity.webp";
    import dissolved_oxygen from "$lib/assets/dissolved-oxygen.webp";
    import pH from "$lib/assets/pH.webp";
    import macro1 from "$lib/assets/macroinvertebrate 1.webp";
    import macro2 from "$lib/assets/macroinvertebrate 2.webp";
    import macro3 from "$lib/assets/macroinvertebrate 3.webp";
    import macro4 from "$lib/assets/macroinvertebrate 4.webp";
    import macro5 from "$lib/assets/macroinvertebrate 5.webp";
    import macro6 from "$lib/assets/macroinvertebrate 6.webp";
    import macro7 from "$lib/assets/macroinvertebrate 7.webp";
    import macro8 from "$lib/assets/macroinvertebrate 8.webp";
    import temp_graph from "$lib/assets/temp_graph.webp";
    import turbid_graph from "$lib/assets/turbid_graph.webp";
    import do_graph from "$lib/assets/do_graph.webp";
    import ph_graph from "$lib/assets/ph_graph.webp";
    import biotic_graph from "$lib/assets/biotic_graph.webp";
    import ept_graph from "$lib/assets/ept_graph.webp";

    import { animate } from "animejs";

    let wrapper!: HTMLDivElement;
    let isOpen = false;

    function toggle() {
        if (!isOpen) {
            wrapper.style.display = "block";
            wrapper.style.height = "0px";
            wrapper.style.opacity = "0";

            requestAnimationFrame(() => {
                const contentHeight = wrapper.scrollHeight;

                animate(wrapper, {
                    height: [0, contentHeight],
                    opacity: [0, 1],
                    duration: 500,
                    easing: "easeInOutQuad",
                    complete: () => {
                        wrapper.style.height = "auto"; // allow auto growth
                    },
                });
            });
        } else {
            const contentHeight = wrapper.scrollHeight;

            animate(wrapper, {
                height: [contentHeight, 0],
                opacity: [1, 0],
                duration: 400,
                easing: "easeInOutQuad",
                complete: () => {
                    wrapper.style.display = "none";
                },
            });
        }

        isOpen = !isOpen;

        animate(".toggle-icon", {
            rotate: isOpen ? 180 : 0,
            duration: 400,
            easing: "easeInOutQuad",
        });
    }
</script>

<div class="mx-auto">
    <button
        onclick={toggle}
        class="w-full text-left py-2 flex justify-between items-center"
    >
        <span class="text-white font-[PrestigeElite] text-xl">
            State of the Creek Report: Hyla Woods 2023 - Published Dec 2023
        </span>
        <span
            class="toggle-icon text-white font-[PrestigeElite] text-xl cursor-pointer"
        >
            {isOpen ? "−" : "+"}
        </span>
    </button>

    <div bind:this={wrapper} class="overflow-hidden mt-2" style="display:none;">
        <p class="with-margin-text">
            Published in <a
                class="with-margin-text-aroace-light-blue"
                href="https://hylawoods.com/"
                target="_blank">Hyla Woods</a
            > Annual State of the Creek Report Essay Competition (First Place)
        </p>
        <div class="flex justify-center">
            <img src={site_l} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 1.</em> Alexy Heston, Photo of Site L: 12 Oct 2023.<sup
                >1</sup
            >
        </p>

        <div class="flex justify-center">
            <img src={site_l2} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 2.</em> Alexy Heston, Photo of Site L: 12 Oct 2023.
        </p>

        <p class="no-margin-text">
            <strong>Introduction</strong>
        </p>
        <p class="with-margin-text indent-8">
            “The best way to understand the universe is through a forest
            wilderness,” once said renowned naturalist John Muir. Forests are
            more than mere resources to be sold, destroyed, and profited from.
            Beautiful living ecosystems, forests serve as a metaphor for both
            the best and worst of humanity. On one hand, forests embody the
            pinnacle of natural beauty and harmony. They are a testament to the
            intricate relations between countless species, each playing a role
            in maintaining the delicate balance of life. Just like how humans
            should coexist with nature, forests demonstrate the importance of
            unity and collaboration. Forests also symbolize resilience and
            adaptability. They have withstood the test of time, surviving
            through various environmental changes and disturbances. In this
            sense, they reflect humanity's ability to overcome challenges and
            evolve in the face of adversity. Forests teach us that even in the
            harshest conditions, life can thrive if we learn to adapt and work
            together. However, forests also highlight some of humanity's darkest
            tendencies. Throughout history, we have witnessed the destruction
            and exploitation of these precious ecosystems for our own selfish
            gains. Deforestation driven by greed, urbanization encroaching upon
            pristine wilderness, and unsustainable logging practices leading to
            the untimely demise of the forests. This quote, in my opinion,
            encapsulates our journey to Hyla Woods.
        </p>
        <p class="no-margin-text">
            <strong>Narrative</strong>
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            On October 12th and 30th, our class had the privilege of visiting
            Hyla Woods, an 160-acre actively logged forest located west of
            Portland, near Forest Grove. This remarkable forest, owned by the
            Hayes family, serves as a proof-of-concept experimental site with
            the ambitious goal of being “ecologically complex, economically
            viable, and responsibly operated.”<sup>2</sup>
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            Hyla Woods distinguishes itself from conventional logging operations
            through a fundamental difference in approach. In the realm of timber
            production, clear-cutting has emerged as the prevailing and
            profit-driven method, characterized by the harvesting of robust
            natural forests and replacement with artificial, monoculture tree
            plantations that fail to emulate the invaluable ecosystem services
            of a thriving woodland. On the contrary, Peter and Pam Hayes adopt a
            distinct and conscientious approach in the management of Hyla Woods.
            Their practices involve selective cutting, with a focus on smaller
            trees and an objective to preserve a diverse array of tree species.
            Additionally, they abstain from employing poison sprays following a
            harvest, prioritizing the integrity and health of their land and its
            surrounding environment.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            During our visit, we had the opportunity to collect valuable data
            from the stream, focusing on various variables such as pH levels,
            dissolved oxygen (DO), water and air temperature, turbidity, and
            benthic macroinvertebrates. We collected this data on both visits
            (with the exception of benthic macroinvertebrates) from 12 different
            field sites along the creek, with the objective to assess the
            overall salubrity of the creek and its capacity to support the
            diverse life found within, with a particular emphasis on Coast Coho
            salmon. These salmon are a threatened species that spawn only in
            small mountain streams, ones similar to Lousignont Creek in Hyla
            Woods.
        </p>
        <p class="with-margin-text indent-8">
            Our work at Hyla Woods was driven by four foundational questions:
            What defines a system and how does it function? How do organisms
            influence one another and their surrounding environment? How does
            energy and matter circulate within an ecosystem? And, most
            importantly, how can we determine the health of an ecosystem?
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            The recent investigation fostered significant learning outcomes
            related to scientific practices and cross-cutting concepts. As
            evidenced by the alignment with numerous Next Generation Science
            Standards (NGSS), the work meaningfully advanced our understanding
            of science.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            Specifically, the activities connected to NGSS Practice 1 by seeking
            answers to core questions, especially “How can we determine the
            health of an ecosystem?” Substantial planning and two days of
            fieldwork at Hyla Woods aligned with Practice 3. Practice 4 was
            engaged through analytical evaluation of the collected data to draw
            conclusions. Practices 5 and 6 respectively involved applying
            mathematical analysis to the data collection and constructing
            explanations based on results. Communication and evaluation of test
            outcomes with the landowners for stewardship purposes embodied
            Practice 8.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            Several cross-cutting concepts were also engaged. Repeated water
            testing to identify patterns coincided with Concept 1. The various
            data collected exemplified Concept 3. Investigation of the Hyla
            Woods system demonstrated Concept 4. Aspiring to understand
            ecosystem stability over time related to Concept 7.
        </p>
        <p class="with-margin-text indent-8">
            Beyond just the immense ramifications of in-class learning, this
            work is not limited to our science classroom in the slightest. Our
            research contributes to helping the Hayes family continually manage
            the forest sustainably, and to protect the Coast Coho Salmon that
            spawn in the Nehalem watershed. The implications of the research
            conducted by the science classroom extend far beyond the bounds of
            traditional in-class learning. The work performed not only enhances
            our educational experience, but also yields tangible benefits for
            environmental protection and sustainable management in the local
            community. Through collaborating with the Hayes family on analysis
            of their forest land, we were able to aid ongoing stewardship
            efforts to ensure the responsible and long-term utilization of this
            vital natural resource. Moreover, the watershed research focused on
            the endangered Coast Coho Salmon demonstrates how knowledge gained
            within the classroom walls can directly assist local wildlife. By
            understanding some of the factors influencing the salmon that spawn
            in the Nehalem watershed, we enhance monitoring of the watershed
            conditions and pinpoint any emerging threats, thereby supporting
            measures to safeguard these important fish and the long-term
            viability of the species.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            Wild Salmon Strongholds are a vital component for the health of
            salmon. As discussed in class, these areas allow salmon populations
            to exist unaffected by human impacts and activities, thereby
            ensuring the long-term viability and sustainability of the species.
            One such stronghold is Hyla Woods. As one of the remaining places
            where salmon can thrive in their natural habitat without
            interference, it is imperative that Hyla Woods maintains its
            favorable conditions. The interconnected relationship between
            forests and streams lies at the core of the region's ecological
            integrity. As we learned, these natural systems are inextricably
            linked - the forests help regulate water flows and quality, while
            the streams transport nutrients into the woods. A disruption to
            either can gravely harm the other.<sup>3</sup>
        </p>
        <p class="with-margin-text indent-8">
            For Hyla Woods, the connections between overland and instream
            environments are evident. With its woodlands directly adjacent to
            salmon-bearing waterways, the area provides salmon with optimal
            spawning grounds, shelter from predators and food sources. The
            forest canopy shades the streams, regulating water temperatures
            needed by salmon. Leaf litter and woody debris from the trees fall
            into the creeks, creating habitat complexity.<sup>4</sup>
        </p>
        <p class="no-margin-text">
            <strong>Tests and Results</strong>
        </p>

        <p class="with-margin-text indent-8 pt-0">
            Water temperature is a measurement of the kinetic energy, or
            movement of molecules, within a body of water. Determining water
            temperature accurately is an important factor when assessing the
            health of aquatic ecosystems. For our analysis, we used a
            thermometer to gauge the temperature in several locations of the
            creek over the course of two minutes. To obtain a representative
            reading, we took measurements at three different spots within the
            waterway and then calculated the average of these results.
            Temperature recordings are vital for understanding the well-being of
            the creek environment, especially as it pertains to sensitive
            species such as Coast Coho Salmon. As ectothermic animals, salmon
            cannot internally regulate their body heat and rely entirely on
            ambient water temperatures. If temperatures rise too high, it can
            quickly become fatal for these cold-blooded fish. Conversely,
            temperatures that fall too low risk freezing the salmon. Most
            aquatic flora and fauna thrive when water temperatures are within a
            range of 5 to 25 degrees Celsius. After completing two rounds of
            systematic testing at our field sites, the average temperature we
            observed was 10.9 degrees Celsius.<sup>5</sup>
        </p>

        <div class="flex justify-center">
            <img src={turbidity} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 3.</em> Alexy Heston, Conducting Turbidity Test: 12 Oct 2023.
        </p>

        <p class="with-margin-text indent-8 pt-0">
            Turbidity is a measure of water cloudiness and an indicator of how
            much light can pass through the water. We assessed turbidity levels
            by collecting creek water samples in a specialized tube containing a
            checkerboard pattern at the bottom, known as a turbidity tube. The
            sample water was slowly released from the tube until the pattern
            became visible, at which point we recorded the depth of water in
            centimeters. This measurement was then converted to Nephelometric
            Turbidity Units (NTU), a standardized scale quantifying the amount
            of suspended solids in the water. Suspended sediment concentrations
            impact creek health through several mechanisms. Highly turbid water
            reduces sunlight penetration, potentially burying aquatic organisms.
            It can also increase water temperatures by limiting sunlight
            absorption. Reduced dissolved oxygen levels may occur due to lower
            photosynthetic activity. Suspended particles risk becoming trapped
            in fish gills. Organisms may face difficulties locating prey and
            avoiding predators with lower visibility. Elevated turbidity can
            also promote algal growth. For salmonids, an ideal turbidity is
            generally considered to be below 25 NTU. After collecting samples
            from twelve field sites on two occasions, our average turbidity
            readings were less than 5 NTU.<sup>6</sup>
        </p>

        <div class="flex justify-center">
            <img src={dissolved_oxygen} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 4.</em> Freya Ellis, Conducting DO Test: 30 Oct 2023.
        </p>

        <p class="with-margin-text indent-8 pt-0">
            Dissolved Oxygen (DO) refers to the diatomic oxygen (O<sub>2</sub>)
            molecules that are dissolved in an aqueous solution (H2O). We tested
            the concentration of dissolved oxygen by again taking a water sample
            from the creek and adding several chemicals to it. This test was not
            performed in the field directly, rather the water sample was
            transported back to our classroom science laboratory where the
            chemical procedures were executed after the gaseous oxygen was fixed
            (trapped) by earlier chemical reactions of the three initial
            reagents. Through a series of chemical reactions, this test process
            isolated the oxygen molecules that had been dissolved in the water
            sample and transformed them into a form that could be quantified and
            measured using analytical instrumentation. We were measuring the
            actual amount of oxygen gas present in molecular solution within the
            water, expressed in units of milligrams per liter (mg/L), also shown
            in parts per million (ppm), which is critically important for
            various aquatic lifeforms. For example, salmon and trout respire by
            extracting dissolved oxygen from the water through their gills, so
            they require a minimum concentration range of approximately 8-12 ppm
            DO for health and survival. Concentrations exceeding this threshold
            range are also suitable to support robust aquatic ecosystems. After
            systematically conducting tests on water samples procured from the
            twelve distinct locations along the creek, we determined that the
            average dissolved oxygen concentration observed across both sites
            was 9.0 mg/L, which is equal to 9.0 ppm.
        </p>

        <div class="flex justify-center">
            <img src={pH} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 5.</em> Alexy Heston, Conducting pH Test: 12 Oct 2023.
        </p>

        <p class="with-margin-text indent-8 pt-0">
            pH is the measure of the concentration of hydroxyl ions (OH-)
            compared to hydrogen ions (H+) in an aqueous solution. A solution in
            which there is a higher concentration of hydrogen ions than hydroxyl
            ions is considered acidic, whereas a solution with a higher
            concentration of hydroxyl ions than hydrogen ions is considered
            basic. We conducted pH testing on a sample of creek water to
            determine its acidity level and suitability for salmon habitat. The
            testing was performed by adding various chemical reagents to
            aliquots of the water sample in order to alter the solution
            concentration and induce a color change reaction. The resultant
            coloration of each test mixture was then compared to a calibrated
            color scale. This colorimetric comparison method allowed us to
            determine the corresponding numerical pH value for the creek water.
            Most Pacific salmon species have been shown to thrive in freshwater
            with a pH range of 6.0 to 8.0, though a pH of around 7.0 is
            considered optimal for salmon health and productivity. With this pH
            tolerance range in mind, we systematically tested water samples
            collected from two separate locations along the creek on multiple
            occasions. The pH was measured at each site and the average values
            were calculated. After completing pH testing at the field sites, we
            determined that the average pH observed in the creek water was 6.4.
        </p>

        <div class="flex justify-center">
            <img src={macro1} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 6.</em> Freya Ellis, Collecting Macroinvertebrates: 30 Oct 2023.
        </p>

        <div class="flex justify-center">
            <img src={macro2} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 7.</em> Freya Ellis, Sorting Macroinvertebrates: 30 Oct 2023.
        </p>

        <div class="flex justify-center">
            <img src={macro3} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 8.</em> Freya Ellis, Identifying Macroinvertebrates: 30 Oct
            2023.
        </p>

        <div class="flex justify-center">
            <img src={macro4} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 9.</em> Freya Ellis, Continually Identifying Macroinvertebrates:
            30 Oct 2023.
        </p>

        <div class="flex justify-center">
            <img src={macro5} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 10.</em> Freya Ellis, Sorting Macroinvertebrates: 30 Oct 2023.
        </p>

        <div class="flex justify-center">
            <img src={macro6} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 11.</em> Freya Ellis, Identifying Macroinvertebrates: 30 Oct
            2023.
        </p>

        <div class="flex justify-center">
            <img src={macro7} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 12.</em> Freya Ellis, Macroinvertebrates: 30 Oct 2023.
        </p>

        <div class="flex justify-center">
            <img src={macro8} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 13.</em> Freya Ellis, Sorted Macroinvertebrates: 30 Oct 2023.
        </p>

        <p class="with-margin-text indent-8 pt-0">
            We tested the amount of benthic macroinvertebrates present in the
            creek water. On our initial visit, we placed a leaf pack in the
            water to allow colonization by macroinvertebrates. On the second
            visit, we removed the leaf pack and carefully brushed any
            macroinvertebrates from the leaves and other debris. We then
            identified and sorted the macroinvertebrates under a microscope
            according to predetermined classification groups. We counted the
            number of individuals in each group. This process allowed us to
            quantify the macroinvertebrate populations present by species.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            We then calculated both the Biotic Index and EPT Score for the site
            to evaluate water quality and ecosystem health. The Biotic Index is
            a measure of the average tolerance value of the macroinvertebrates
            present. We calculated this by first multiplying the count for each
            species by its respective Taxon Tolerance Level. We then summed
            these weighted counts and divided by the total number of individuals
            sampled. Generally speaking, sites with a lower Biotic Index (less
            than 3.75) indicate higher water quality and less organic pollution
            due to a community composition of more sensitive species.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            The EPT Score provides a measure of the relative abundance of
            certain pollution-sensitive macroinvertebrate orders - Ephemeroptera
            (Mayflies), Plecoptera (Stoneflies), and Trichoptera (Caddisflies).
            These three orders are considered to be among the most sensitive to
            pollution. We calculated the EPT Score by summing the counts of
            individuals from these three orders and dividing by the total count
            of all individuals sampled. This result was then multiplied by 100
            to express it as a percentage. Higher EPT Scores (greater than 50%)
            are taken to indicate higher water quality.
        </p>
        <p class="with-margin-text indent-8">
            We tested macroinvertebrate populations because their composition
            and relative abundances provide insight into the overall health of
            the aquatic ecosystem. The sensitivity and feeding groups
            represented can offer clues about factors like substrate
            composition, availability of food resources, and the ability of the
            site to support dependent wildlife. For example, a sample rich in
            shredders from a pool area with sandy substrate may suggest that
            area functions well as a retention zone for organic materials. The
            diversity of species sampled can also inform whether the site can
            sustain local amphibian, fish, bird and other populations.<sup
                >7,8</sup
            >
        </p>
        <p class="no-margin-text">
            <strong>Analysis and Conclusions</strong>
        </p>
        <p class="with-margin-text indent-8 pt-0">
            The average water temperature we observed was 10.9 degrees Celsius.
            The adequate range for salmon health is between 5 to 25 degrees
            Celsius, with lower temperatures (5 to 13 degrees Celsius) generally
            being more beneficial. This data point fits comfortably within this
            ideal range. This indicates that the salmon will be kept at an
            optimal temperature, allowing them to reap the associated benefits,
            such as higher macroinvertebrate populations and avoidance of
            heat-related mortality. The average water temperature over the
            period from Fall 2016 to Fall 2023 is 9.502594697 degrees Celsius.<sup
                >9</sup
            > This year's data point of 10.9 degrees Celsius is significantly higher
            than the long-term average temperature. However, this observation remains
            well within the ideal range for salmonid health. The water temperature
            has been rising steadily since 2019 based on our measurements. While
            this increasing trend is not currently a major cause of concern, as the
            rise has been slow and temperatures remain far from dangerous levels,
            it is a pattern that merits ongoing monitoring in the coming years. The
            water temperature at Hyla Woods has consistently been at a safe level
            throughout the duration of our testing. It continues to provide a suitable
            environment for salmon health. We should maintain surveillance of temperature
            readings to confirm this favorable condition persists.
        </p>

        <div class="flex justify-center">
            <img src={temp_graph} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 14.</em> Temperature Graph
        </p>

        <p class="with-margin-text indent-8">
            The average turbidity level we observed at our testing site was 5
            Nephelometric Turbidity Units (NTU). The adequate turbidity range
            for salmon health and survival, as established by fisheries
            biologists and water quality experts, is less than 25 NTU, with
            lower cloudiness or turbidity levels being preferable. This
            particular data point of 5 NTU fits fantastically within the
            recommended turbidity range for salmon. This indicates that the
            salmon inhabiting the waters near our testing site will be
            experiencing an extremely healthy turbidity environment that avoids
            all of the potential issues and stressors that can arise when
            turbidity is at high levels. The average turbidity reading over the
            time period from Fall 2016 to Fall 2023, encompassing the collective
            multiple testing events during that time frame, is 6.375 NTU. This
            year's data point of 5 NTU, is lower than the overall multi-year
            average turbidity. However, it is probable that the higher outliers
            observed in 2019 and 2020 skewed the long-term average upward
            somewhat. The turbidity level does appear to have been falling
            gradually since 2020 based on our measurements. Nonetheless, the
            downward trend is not necessarily statistically significant, as the
            fluctuations seem to have been primarily driven by those temporarily
            elevated turbidity readings in 2019 and 2020 rather than an
            underlying long-term decrease. Despite some variations from year to
            year, the turbidity levels we have consistently measured at Hyla
            Woods Creek have reliably remained at a safe level that fully
            supports the health and well-being of salmon populations. Our
            testing confirms that the turbidity at this location continues to be
            well within the optimal range for these fish.
        </p>

        <div class="flex justify-center">
            <img src={turbid_graph} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 15.</em> Turbidity Graph
        </p>

        <p class="with-margin-text indent-8">
            The dissolved oxygen (DO) level observed at Hyla Woods was 9 parts
            per million (ppm). The adequate range for salmon health according to
            scientific research is between 8-12 ppm, with higher DO
            concentrations being preferable. At 9 ppm, the data point collected
            falls comfortably in the middle of this established range. This
            indicates that the salmon present will have sufficient oxygen
            available to carry out vital metabolic processes such as processing
            food intake for energy and building new cells, ensuring their
            overall health and viability. The average DO level measured over the
            period from Fall 2016 to Fall 2023 was calculated to be 9.493915719
            ppm. The data point of 9 ppm collected this year is slightly lower
            than this long-term mean, though still well within the ideal range
            for maintaining salmonid health and productivity. No discernible
            trends are evident from analyzing the DO data collected annually
            over the past several years, which instead appears to fluctuate
            within a relatively narrow band without any consistent increases or
            decreases. The DO levels observed at Hyla Woods have consistently
            remained at levels deemed safe to support salmon according to
            scientific consensus. Continued monitoring of this parameter is
            prudent to confirm conditions remain suitable going forward.
            However, given the data point gathered is in the middle of the
            optimal range and no issues have been identified previously, it can
            be reasonably concluded the water quality currently poses no threat
            to the salmon population inhabiting Hyla Woods. Ongoing testing will
            help verify this positive finding into the future.
        </p>

        <div class="flex justify-center">
            <img src={do_graph} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 16.</em> Dissolved Oxygen Graph
        </p>

        <p class="with-margin-text indent-8">
            Based on our observations, we found that the average pH level
            recorded was 6.4. It is important to note that when it comes to the
            health of salmon, a pH range of 6.0 to 8.0 is considered adequate.
            However, a pH level around 7.0 is generally regarded as optimal for
            their well-being. Taking this into consideration, it can be
            concluded that the recorded data point of 6.4 comfortably falls
            within the recommended range for salmon health. Although slightly
            acidic, it still remains within an acceptable parameter and should
            not pose any significant concerns for their overall welfare. This
            information suggests that the salmon will be carefully maintained at
            an optimal pH level. By doing so, it ensures that there will be no
            interference with the essential biochemical reactions occurring
            within the aquatic ecosystem. This is crucial as it prevents any
            potential harm or mortality of other aquatic organisms present in
            the environment. Throughout the time period from Fall 2016 to Fall
            2023, the average water temperature has been calculated to be
            6.454569129. It is worth noting that this year's data point of 6.4
            is slightly lower than the average. However, it is important to
            highlight that this deviation is negligible and does not pose any
            significant concerns for the health and well-being of salmonid
            species. The recorded temperature still falls well within the ideal
            range that supports their optimal growth and overall health. Over
            the course of the eight years that we have been visiting Hyla Woods,
            an interesting observation can be made regarding the pH value. It
            has remained remarkably consistent, hovering around 6.5. While this
            indicates a slightly acidic nature, it is worth mentioning that the
            pH levels at Hyla Woods have consistently remained within a safe
            range throughout our testing period. Maintaining a stable pH level
            is crucial for the overall health and well-being of ecosystems. A
            slightly acidic pH can be attributed to various factors such as soil
            composition, vegetation types, and other environmental factors
            specific to Hyla Woods. Despite this slight acidity, there is no
            cause for significant concern as it falls within acceptable limits.
            The fact that these levels have remained relatively unchanged over
            an extended period of time showcases the stability and resilience of
            Hyla Woods' ecosystem. This consistency also suggests that the
            natural processes occurring within this environment are effectively
            maintaining a balanced pH level. It is important to continue
            monitoring these pH levels periodically to ensure they do not
            deviate significantly from their current state. By doing so, we can
            gain further insights into how Hyla Woods' ecological system is
            evolving and respond accordingly if any changes are observed in
            order to maintain its long-term sustainability.
        </p>

        <div class="flex justify-center">
            <img src={ph_graph} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 17.</em> pH Graph
        </p>

        <p class="with-margin-text indent-8">
            Based on our observations, the average Biotic Index that we recorded
            was determined to be 3.76. It is important to note that for optimal
            salmon health, the recommended range for the Biotic Index is below
            5. In particular, lower Biotic Indices, such as those below 3. 75,
            are considered more favorable in terms of maintaining excellent
            salmon health. Taking this into consideration, it is worth
            highlighting that the data point we analyzed falls comfortably
            within this recommended range. Although it deviates slightly from
            being classified as an excellent value, it remains an extremely
            close approximation and indicates a very positive level of
            environmental quality for salmon habitat.These findings strongly
            suggest that the creek ecosystem is in a notably robust state, as
            the presence of these creatures indicates an environment that
            supports their survival. This is particularly significant because
            these organisms are highly sensitive to adverse conditions, and
            their thriving presence implies favorable conditions within the
            creek. It is noteworthy to mention that over the span of time from
            Fall 2016 to Fall 2023, the average Biotic Index stands at a
            commendable 3.934791769. This index serves as an important measure
            of overall ecological health and further confirms the positive state
            of the creek's ecosystem during this period. The data point for this
            year, which stands at 3.76, shows a slight decrease compared to the
            average value. This decrease indicates that the overall tolerance of
            macroinvertebrates has decreased, which can be considered a positive
            outcome in terms of environmental health. It is worth noting that
            this value does not exhibit any discernible trends and appears to
            fluctuate without any specific pattern or reason. The Biotic Index,
            which is a measure of the overall ecological health and diversity of
            an ecosystem, has consistently demonstrated positive results at Hyla
            Woods. The index has maintained a commendable level, indicating a
            thriving and well-balanced environment. Moreover, our ongoing
            monitoring efforts reaffirm that the ecosystem's health remains at
            an excellent level, ensuring the sustainability of its various
            components. This bodes well for the continued success and
            preservation of Hyla Woods' biodiversity in the long term.
        </p>

        <div class="flex justify-center">
            <img src={biotic_graph} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 18.</em> Biotic Index Graph
        </p>

        <p class="with-margin-text indent-8">
            Based on our observations, the average EPT Score that we have
            encountered is 60. 1. It is important to note that when it comes to
            assessing the health of salmon, an adequate range for their
            well-being is considered to be greater than 50. In this case, a
            higher EPT Score indicates better health for the salmon. Hence, this
            particular data point aligns well within the acceptable range and
            showcases positive results in terms of salmon health assessment. The
            presence of these three sensitive creatures in the creek is a strong
            indication of its overall health and vitality. It suggests that the
            conditions in the creek are favorable and able to support the
            survival of these creatures, which are known to be highly sensitive
            to changes in their environment. This is an encouraging sign, as it
            indicates that the creek has maintained a relatively stable and
            healthy ecosystem. Furthermore, when examining the average EPT
            (Ephemeroptera, Plecoptera, and Trichoptera) Score over a
            significant period of time from Fall 2016 to Fall 2023, it was found
            to be 66.42715661. The EPT Score is widely used as an indicator of
            water quality and ecological integrity in aquatic ecosystems. This
            score represents a moderate to good quality rating for the creek. By
            considering both the presence of sensitive creatures and the EPT
            Score, we can conclude that the overall condition of this creek is
            quite healthy. These findings provide valuable insights into its
            ecological well-being and serve as evidence that efforts made
            towards maintaining water quality have been successful thus far. The
            data point recorded this year, which stands at 60.1, is slightly
            lower than the average value. However, it is important to note that
            this deviation should not be a cause for concern as this particular
            data point falls well within the ideal range for maintaining optimal
            health in salmonid populations. It indicates that the overall health
            and well-being of the salmonid species are still being adequately
            maintained, and there is no immediate need for intervention or
            adjustment in their care or environment. The value dropped a fair
            bit from 2020 to 2022, and appears to be staying this way. This
            indicates that some factor may have influenced the creek during this
            time period, but since all of the other variables stayed constant,
            this may just have been a result of error in the data. The EPT at
            Hyla Woods has been at an excellent level for the time we have
            tested there, and continues to do so.
        </p>

        <div class="flex justify-center">
            <img src={ept_graph} alt="" />
        </div>

        <p class="text-white text-center font-[VerilySerif] text-base">
            <em>Fig. 19.</em> EPT Score Graph
        </p>

        <p class="with-margin-text indent-8">
            The consistent positive scores across various measures indicate that
            the steam's health is not only currently in a good state but also
            has the potential to sustain its well-being in the long term. The
            absence of any significant negative trends suggests that the
            ecosystem within the steam is resilient and capable of maintaining
            its ecological balance. The findings from Hyla Woods and this paper
            provide a comprehensive understanding of the steam's health by
            considering multiple factors such as water quality, biodiversity,
            and overall ecosystem dynamics. The excellent scores obtained in
            these assessments highlight the effectiveness of conservation
            efforts and management practices implemented within the steam.
            Moreover, it is worth noting that stable or slightly fluctuating
            values indicate a certain level of equilibrium within the stream's
            ecosystem. However, it is important to acknowledge that continuous
            monitoring and periodic reassessment are crucial to ensure that any
            potential negative trends are promptly identified and addressed.
            Overall, we can be confident in saying that, for the time being,
            Hyla Woods and Lousignont Creek are healthy and thriving, and will
            hopefully become great homes for the next generation of salmon.
        </p>
        <p class="with-margin-text indent-8 m-0">
            In conclusion, Hyla Woods serves as a poignant reminder of the
            intricate web of life and our responsibility to protect and preserve
            it. The mesmerizing ecosystem found within its lush green canopy
            calls upon us to reevaluate our actions and embark on a path of
            sustainability. As we navigate through the delicate balance of
            nature, we must nurture a deep empathy towards the
            interconnectedness of all living beings. Hyla Woods teaches us that
            every choice we make, no matter how small, can have far-reaching
            consequences for both the environment and future generations. By
            acknowledging this interdependence and cultivating a sense of
            stewardship, we pave the way for a harmonious coexistence with
            nature. Let us heed these lessons from Hyla Woods as we strive to
            foster an ecologically-conscious society that values biodiversity,
            embraces sustainable practices, and cherishes the magnificence of
            our planet Earth.
        </p>
        <br />
        <p class="no-margin-text">
            <sup
                >1. “Site L Photos.” Google Drive, 16 Oct. 2023,
                drive.google.com/drive/folders/1zE_UNWP4ct23SsqIa5OINjf5FSZn2av9.
                Accessed 9 Nov. 2023.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >2. Hayes, Peter, and Pam Hayes. Hyla Woods. hylawoods.com.
                Accessed 9 Nov. 2023.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >3. Salmon Strongholds.” Google Docs, 17 Oct. 2023,
                docs.google.com/document/d/1_B4eDWzsgJ7Q_FcrAaDbOQcOmyyYHQouKnV58t0kC38/edit.
                Accessed 9 Nov. 2023.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >4. “Hyla Woods Reference Table.” Google Docs, 7 Nov. 2023,
                docs.google.com/document/d/1z-R5swp6ADlDye46el8cSfiOp122jWnADTV6NcdY210/edit.
                Accessed 9 Nov. 2023.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >5. Banerjee Murthy, Vikas. “Water Quality Framed Notes.” Google
                Docs, 26 Sept. 2023,
                docs.google.com/document/d/1rB3km3YMkqYLlyRKwh3ClVXhAqrGro6BZiGnpuX_PPE/edit.
                Accessed 9 Nov. 2023.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >6. “Water Quality Reading.” Google Drive,
                drive.google.com/file/d/15LKml1gAIuT8vEAUxWsGyK4rM5sz_fXb/view?usp=drivesdk.
                Accessed 9 Nov. 2023.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >7. Banerjee Murthy, Vikas. “River Webs Notes 1.” Google Drive,
                22 Nov. 2023,
                https://drive.google.com/file/d/14mpyq943ba4nJAD4cG6ly8E6YWALhTCv/view?usp=drivesdk.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >8. Banerjee Murthy, Vikas. “River Webs Notes 2.” Google Drive,
                22 Nov. 2023,
                drive.google.com/file/d/1YrLaNy02q95LUjkiymwVmZSSDvqR9SVh/view?usp=drivesdk.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >9. Lowes, Jesse. “Hyla Woods Database.” Google Sheets,
                season-01 2014,
                docs.google.com/spreadsheets/d/1WRpBgLSrGmeJGv2yurNeXafvWXYXkT-Gfw4m341IYp0/edit.
                Accessed 9 Nov. 2023.</sup
            >
        </p>
    </div>
</div>
