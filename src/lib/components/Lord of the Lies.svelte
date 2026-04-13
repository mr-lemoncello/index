<script lang="ts">
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
            William Golding: Lord of the Lies - 14 Apr 2025
        </span>
        <span
            class="toggle-icon text-white font-[PrestigeElite] text-xl cursor-pointer"
        >
            {isOpen ? "−" : "+"}
        </span>
    </button>

    <div bind:this={wrapper} class="overflow-hidden mt-2" style="display:none;">
        <p class="with-margin-text indent-8 mb-0">
            We often turn to fiction to reflect the truth: to better understand
            ourselves, our nature, and our societies. But what happens when a
            novel disguises personal pessimism as universal insight? Lord of the
            Flies is hailed as an explanation of human nature, a text that
            reveals our ‘inherent savagery’, but this reverence deserves closer
            scrutiny. Given the improbability of a group of people so quickly
            descending into violence and that Golding projects his own flaws
            onto the boys on the island, it is surprising it is thought of as a
            must-read because it ought not to be.
        </p>
        <p class="with-margin-text indent-8 mb-0">
            One major criticism of the novel is the improbability of a group of
            children raised in a society so quickly descending into violence and
            chaos without an imminent, life-threatening danger; such an
            unraveling oversimplifies the complexity of human nature. The
            closest real-life scenario we have to Lord of the Flies’ result was
            antithetical to it: Mano Totao and five Tongan teenagers who, in
            1965, set out on a fishing trip and were stranded on a deserted
            island after being caught in a typhoon.<sup>1</sup>
            This is similar to Golding’s boys, who arrive on the island via plane
            crash, leaving both sets of boys wrecked and left to survive on their
            own. Golding’s boys fully descend into chaos: “The rock struck Piggy
            a glancing blow from chin to knee; the conch exploded into a thousand
            white fragments and ceased to exist” (181). Literally, this marks the
            destruction of Piggy and the conch, but symbolically, it represents the
            end of civilization and the shift in power from morality to barbarity.
            In contrast, the Tongan boys cooperated to build a functional community,
            surviving for fifteen months. It’s important to note that they were friends
            beforehand, but this does not fully account for their success. Golding’s
            boys had several months on the island to form alliances and relationships,
            and did so. Friendship alone can not explain the Tongan boys’ achievements:
            they didn’t just avoid violence, they created systems: tending to each
            other’s injuries, growing vegetables, raising chickens, building rainwater
            storage, a gym, and a permanent fire, all of which is impossible without
            shared vision and an ethic of care. As Totao put it, “our secret superpower
            is our ability to cooperate.” Both are microcosmic: Golding depicts morality
            crumbling in isolation, but a real scenario under similar conditions
            suggests that humanity persists and thrives. One could even say that
            living within society is worse. At very young ages, humans are altruistic<sup
                >2</sup
            >
            and egalitarian, sharing resources,<sup>3</sup>
            whether or not they were obtained in collaboration.
            <sup>4</sup> After many years of society’s training, humans grow
            complacent. In 1961, the Milgram Experiment showed that 64% of
            participants would deliver multiple lethal shocks to an unconscious
            body because a scientist told them to.
            <sup>5</sup> In 1971, a group of college students were placed in a
            simulated prison environment, and the ‘guards’ became so abusive,
            the experiment was cut short.<sup>6</sup> The concept is not limited
            to experiments: the Abu Ghraib prison guards committed physical and
            sexual abuse, rape, and murder against inmates.<sup>7</sup> Their inherent
            nature did not strictly shape these individuals’ behavior, rather, the
            societal pressures of obedience and conformity that undermine innate
            altruistic tendencies did. Golding’s portrayal of human nature is a cautionary
            tale, but the Tongan castaways suggest that cooperation, not chaos, is
            the more likely outcome of adversity, and other examples suggest chaos
            forms more often within society than not.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            While reality has since indicated the novel is unrealistic, what is
            more interesting is why it takes this stance. The most compelling
            idea is that Golding projects his own flaws onto the boys on the
            island. Some key moments bear resemblance to moments in his life: he
            had an unhappy childhood, was an alcoholic, prone to depression,
            miserable, angry, and misanthropic. He himself said there was a
            “monstrous” side to his character, admitted to being pleased when a
            schoolfriend died, and said a fourteen-year old girl was “depraved
            by nature… already as sexy as an ape,” and then he tried to rape
            her.
            <sup>8,9</sup> This reflects the novel; in an appalling example of
            behavior, Roger rapes a sow with the other hunters’ full support:
            “The hunters followed, wedded to her in lust… Robert stabilized the
            thing in a phrase which was received uproariously. ‘Right up her
            ass!’” (135). His comments show a disturbing view of acceptable
            behavior, especially as this appears in his own memoir. Jack’s
            tribe, and especially some of his speeches, are close to those of
            Adolf Hitler. Jack delivers a speech: “Listen, all of you. Me and my
            hunters, we’re living along the beach by a flat rock. We hunt and
            feast and have fun. If you want to join my tribe come and see us.
            Perhaps I’ll let you join. Perhaps not” (140), shockingly similar to
            the early rhetoric of Hitler, specifically Munich, 12 April 1921,
            where Hitler called for an Aryan state and the exclusion of those he
            considered outsiders: “There are only two possibilities: either
            victory of the Aryan, or annihilation of the Aryan and the victory
            of the Jew.”<sup>10</sup> Consider that Golding thought he could have
            been a Nazi if he was in Germany: “I have always understood the Nazis
            because I am of that sort by nature”, and added that “that sad self-knowledge”
            inspired his novel. His admission reveals that he is not simply telling
            a story but using the boys on the island as a projection. Given these
            key moments bear such close resemblance to his own experiences, it is
            not a stretch to conclude he is personifying his own warped views of
            society through the tribe.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            The reason for the novel’s perspectives are now clear, but what is
            more is that it is thought of as a must-read, and it ought not to
            be. It is critically acclaimed, one reason why it has stayed
            relevant for so many years. Modern Library ranks it the 41st best
            novel on the Editor’s List<sup>11</sup>
            and 25th best on the Reader’s List;<sup>12</sup> additionally, the
            BBC survey, the Big Read ranks it 70th best<sup>13</sup> and Time
            Magazine ranks it 7th best.<sup>14</sup> Portland Public Schools has
            said, “It is nearly impossible to be considered an educated
            individual, and not have at least a rudimentary understanding of
            this classic work.”<sup>15</sup>
            Renowned institutions. magazines, and education systems alike have hailed
            this as a classic, and yet, the portrayal of human nature is overly simplistic
            and ultimately misleading. While it asserts that savagery is a part of
            humanity seen when removed from society, this is a bleak and narrow interpretation.
            Simon’s chilling revelation, “Maybe there is a beast… maybe it's only
            us” (106-107), is an example of Golding’s belief that violence is an
            individual trait. However, this overlooks the fact that human rights
            is a relatively new concept. Violence is not so much inherent to individuals
            but a result of what society deems acceptable,<sup>16</sup> and frequently,
            it is not individuals, but societal pressures that make those choices.
            Somehow we are inches away from moving into barbarity, the systems of
            society the only thing holding us together; in reality, humans in isolation
            are altruistic and the systems of society dampen that. That is not to
            say that it is not a good read, just that it is not important enough
            of a read to warrant such universal attention.
        </p>
        <p class="with-margin-text indent-8 m-0 pt-0">
            While Lord of the Flies has edged its way into the literary canon
            thus far, it deserves more a critical eye than continued reverence.
            Its portrayal of human nature is not just wrong but completely
            opposite reality. Golding’s own life and demons bleed into it,
            making it less universal truth than a projection of his psyche. Its
            continued prominence says more about the institutions that hold it
            up than its actual merit. Rather than accepting this unquestioned
            classic, perhaps we should reevaluate the stories we choose to
            elevate and why we choose to do so, especially when these works make
            such broad statements about what it means to be human.
        </p>
        <hr />
        <p class="no-margin-text">
            <sup
                >1. Bregman, Rutger. Humankind: A Hopeful History. Bloomsbury
                Publishing, 2019.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >2. Darley, John M., et al. “FROM JERUSALEM TO JERICHO: A STUDY
                OF SITUATIONAL AND DISPOSITIONAL VARIABLES IN HELPING BEHAVIOR.”
                Journal of Personality and Social Psychology, vol. 27, no. J,
                1973, pp. 100–08.
                sparq.stanford.edu/sites/g/files/sbiybj19021/files/media/file/darley_batson_1973_-_from_jerusalem_to_jericho.pdf.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >3. Warneken, Felix, et al. “Young Children Share the Spoils
                After Collaboration.” Psychological Science, vol. 22, no. 2,
                Dec. 2010, pp. 267–73. https://doi.org/10.1177/0956797610395392.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >4. Ulber, Julia, et al. “How 18- and 24-month-old peers divide
                resources among themselves.” Journal of Experimental Child
                Psychology, vol. 140, Dec. 2015, pp. 228–44. ScienceDirect,
                https://doi.org/10.1016/j.jecp.2015.07.009.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >5. Encina, Gregorio Billikopf. “Milgram’s Experiment on
                Obedience to Authority.”
                nature.berkeley.edu/ucce50/ag-labor/7article/article35.htm.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >6. Leithead, Alastair. “Stanford Prison Experiment Continues to
                Shock.” BBC News, 17 Aug. 2011,
                www.bbc.com/news/world-us-canada-14564182.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >7. Hersh, Seymour M. “Torture at Abu Ghraib.” The New Yorker,
                30 Apr. 2004,
                www.newyorker.com/magazine/2004/05/10/torture-at-abu-ghraib.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup>8. Golding, William. Men And Women Now. John Carey, 2009.</sup>
        </p>
        <p class="no-margin-text">
            <sup
                >9. Carey, John. William Golding: The Man Who Wrote “Lord of the
                Flies.” Faber and Faber, 2009.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >10. Hitler, Adolf. There Are Only Two Possibilities: Victory of
                the Aryan or Victory of the Jew.
                web.viu.ca/davies/H479B.Imperialism.Nationalism/Hitler.speech.April1921.htm.
                München, Bavaria, Germany.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >11. Modern Library Top 100 - Penguin Random House.
                sites.prh.com/modern-library-top-100/#about.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >12. “[MLR] Modern Library 100 Best Novels (the Reader’s List).”
                Letters Republic, 7 Aug. 2012,
                lettersrepublic.wordpress.com/mlr.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >13. BBC - The Big Read - Top 100 Books.
                www.bbc.co.uk/arts/bigread/top100.shtml.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >14. Time Magazine’s All-Time 100 Novels (100 Books).
                www.goodreads.com/list/show/2681.Time_Magazine_s_All_Time_100_Novels.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >15. Brunak, Gene, and Karen Margolis. Lord of the Flies. Edited
                by Kelly J. Gomes,
                www.pps.net/cms/lib/OR01913224/Centricity/Domain/179/Final_Lord_of_the_Flies_Sept_2010.pdf.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >16. Pinker, Steven. “The Surprising Decline in Violence.” TED
                Talks,
                www.ted.com/talks/steven_pinker_the_surprising_decline_in_violence?language=en.</sup
            >
        </p>
        <br />
    </div>
</div>
