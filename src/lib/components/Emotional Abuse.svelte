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
            Emotionally Abusive Parenting and the Societal Structures That
            Sanction It - 11 Nov 2025
        </span>
        <span
            class="toggle-icon text-white font-[PrestigeElite] text-xl cursor-pointer"
        >
            {isOpen ? "−" : "+"}
        </span>
    </button>

    <div bind:this={wrapper} class="overflow-hidden mt-2" style="display:none;">
        <p class="with-margin-text indent-8 mb-0">
            The maxim: <em
                >“all children deserve parents, but not all parents deserve
                children”</em
            >
            is not hyperbole. It is a moral warning that exposes a fundamental failure
            embedded in contemporary social norms: a society that grants adults who
            have never cultivated emotional maturity near-automatic legitimacy as
            parents, while offering children with developing minds, vulnerable psyches,
            and forming identities no comparable protection from the emotional incompetence,
            negligence, or outright cruelty of those caregivers. Emotional abuse
            is not an aberration but a predictable outcome of cultural entitlement:
            the belief and societal pressure that adulthood alone qualifies a person
            for reproduction and parenthood, regardless of psychological readiness
            or interest. Societal institutions, from extended families to religious
            communities to legal systems, expect children to endure whatever emotional
            volatility adults inflict upon them, while offering those same adults
            unearned authority and social immunity. This entitlement, combined with
            a chronic underestimation of the psychological labor required for parenting,
            creates fertile ground for the cycle of emotional harm to persist, not
            because abuse is invisible, but because society refuses to call it what
            it is.<sup>1</sup>
        </p>
        <p class="with-margin-text indent-8 mb-0">
            Emotional abuse in parent-child relationships remains grotesquely
            normalized. Behaviors that would be condemned between adults are
            dismissed when inflicted on children, as though youth transforms
            cruelty into pedagogy. Parents weaponize shame, humiliation,
            gaslighting, and emotional withdrawal, then justify it as discipline
            or tradition.<sup>2</sup> The child is blamed for the parent’s outbursts.
            The parent’s insecurity becomes the child’s burden. Society applauds
            ‘strictness,’ mistaking control for care. This is not merely a ‘difficult
            upbringing’ or a ‘parenting style’; it is a form of psychological violence,
            yet it is often minimized, dismissed, or reframed, and the victims, lacking
            the language or power to defend themselves, internalize the idea that
            love is conditional, that security is unstable, that their worth hinges
            on appeasing an emotionally unpredictable authority. Children subjected
            to emotional abuse endure constant invalidation and humiliation, often
            rationalized as ‘toughening them up;’ manipulation, gaslighting, and
            coercion, treated as normal parental ‘guidance’; fear-based attachment,
            in which the caregiver is at once the source of sustenance and of psychological
            harm; and an erasure of emotional autonomy, where expressing needs is
            punished and suppressing them is rewarded. These behaviors are abusive,
            full stop, and the fact that they are not universally recognized as such
            is a testament to society’s collective willingness to prioritize parental
            comfort over children’s psychological safety.
        </p>
        <p class="with-margin-text indent-8 mb-0">
            Children living under emotionally abusive parents are often trapped
            in an environment where psychological survival becomes their primary
            developmental task. Childhood for them is not a stage of
            exploration: it is a stage of survival. Their energy is diverted
            from growth toward protection. They learn to modulate their behavior
            not in service of exploring the world, but in service of avoiding
            parental retaliation. They master hypervigilance instead of
            curiosity. They understand to mute themselves instead of expressing
            themselves. The result is pathological hypervigilance as children
            develop finely tuned instincts to detect shifts in parental mood;
            stunted emotional development caused by the absence of safe
            emotional modeling; identity distortion, where the child
            internalizes the parent’s contempt and comes to believe it is
            self-generated truth; self-erasure, because visibility invites
            punishment; and attachment wounds that sabotage psychological
            stability and emotional literacy, as children oscillate between
            seeking comfort from and protecting themselves against the same
            adult, all the while learning that their feelings are unacceptable
            or irrelevant.<sup>3</sup>
            These outcomes are not developmental quirks; they are psychological injuries
            inflicted at an age when children lack any means of self-defense.
        </p>
        <p class="with-margin-text indent-8 mb-0">
            The long-term psychological consequences of emotional abuse
            constitute a form of delayed devastation, lingering like ghosts.
            Adults raised in emotionally abusive homes often spend years, if not
            decades attempting to untangle themselves from beliefs and behaviors
            installed by immature or malicious caregivers, healing from
            psychological wounds that did not have to exist: enduring
            depression, anxiety, and complex trauma in the form of emotional
            dysregulation, dissociation, and self-blame,<sup>4</sup>
            extracted directly from parental volatility; chronic self-doubt and self-silencing,
            remnants of being trained to distrust others and one’s own perceptions,
            an especially cruel legacy of gaslighting; maladaptive relational patterns,
            ranging from people-pleasing to avoidance of any loving relationship,
            shaped by attachment wounds inflicted during formative years;<sup
                >5</sup
            >
            and a damaged sense of self, because they spent their childhoods
            being told, implicitly or explicitly, that they were not enough.<sup
                >6,7</sup
            >
            They are the predictable consequences of entrusting vulnerable
            children to caregivers who lack the capacity or the willingness to
            act with basic emotional responsibility, choosing power over
            compassion, control over connection.<sup>8</sup>
        </p>
        <p class="with-margin-text indent-8 mb-0">
            A central driver of emotionally abusive parenting is emotional
            immaturity: an adult’s inability to regulate their own emotions,
            empathize with others, or differentiate their personal frustrations
            from their child’s needs.<sup>9</sup>
            However, emotional immaturity alone does not explain the scale of the
            problem. Emotional abuse persists not only because abusive parents exist,
            but because societal institutions protect them through the culturally
            sanctioned beliefs that: all adults are inherently fit to parent, reproduction
            is a social milestone rather than a personal choice, and children exist
            to fulfill adult desires, expectations, or identities.<sup>10</sup> Emotional
            abuse flourishes because communities protect parents at the expense of
            children: ‘respect your parents no matter what’ (translation: accept
            abuse quietly), ‘all families have problems’ (translation: your pain
            is ordinary and therefore unimportant), ‘parents know best’ (translation:
            your perception of mistreatment is invalid), ‘family matters are private’
            (translation: stay silent even when you are being abused).
        </p>
        <p class="with-margin-text indent-8 mb-0">
            One of society’s most insidious failures is the way it dehumanizes
            children. Children are frequently treated as decorative proof of
            adulthood, emotional trash bins, blank slates on which parents
            project insecurities, or subordinates who must obey without
            question. Children are people, not dolls to dress up for social
            approval, not emotional sponges to absorb a parent’s unresolved
            trauma, not lesser beings who exist to endure ridicule, disrespect,
            or authoritarian domination. They are people with memory, with
            dignity, with interior lives that are shaped, sometimes damaged, by
            every word, every gesture, every silence. Children remember, maybe
            not every detail, but the emotional reality? They remember all of
            it.<sup>11</sup>
        </p>
        <p class="with-margin-text indent-8 mb-0">
            These narratives collectively ensure that abusive parents remain
            socially insulated while children are forced into complicity. They
            transform abuse from an individual failing into systemic negligence.
            In this framework, parenthood becomes a default status conferred by
            age, biology, or marriage, not by competence, willingness, or
            emotional preparedness.<sup>12,13</sup>Society offers little
            scrutiny of adults’ motivations for having children; instead, it
            glorifies parenthood and stigmatizes those who choose not to
            reproduce.<sup>14,15</sup> The irony is striking: adults who lack
            the emotional maturity to question social pressure or examine their
            motivations often become parents for reasons entirely divorced from
            readiness: to conform, to appease others, to fill a void, to live a
            script. Meanwhile, individuals who conscientiously evaluate whether
            they should become parents; those who resist pressure because they
            understand the gravity of raising a human being are often the ones
            most capable of providing care.<sup>16</sup> In this way, the unprepared
            are systematically elevated and the responsible side-eyed.
        </p>
        <p class="with-margin-text indent-8 mb-0">
            To illustrate what emotionally competent parenting looks like,
            secure attachment theory provides a clear framework. Secure
            attachment is defined as a deep, emotional bond where the child
            feels safe, understood, and valued. It is focused on creating a
            strong, responsive, and trusting bond with the child, key practices
            including being physically close, responding sensitively to their
            cues, and maintaining a predictable and loving environment.
            According to attachment theory, children who form secure attachments
            with caregivers develop better emotional regulation, social
            competence, and resilience.<sup>17</sup>
            Securely attached children show lower levels of anxiety and depression.
            They also perform better academically and socially.<sup>18</sup> Incorporating
            secure attachment into parenting involves consistently meeting the child’s
            needs for comfort and security while also providing the freedom to explore
            their world from a secure base, which is done in three ways: responsiveness,
            consistency in structure, and autonomy-supporting.
        </p>
        <p class="with-margin-text indent-8 mb-0">
            Responsive parenting means engaging with children in a consistent,
            sensitive, and emotionally warm way. This involves being present and
            empathetic to the child’s feelings and experiences, and responding
            in a timely, appropriate, and sensitive way to build a strong
            emotional bond. It involves observing and interpreting body language
            and then reacting to support their development and emotional
            well-being.<sup>19</sup> This is synonymous with being emotionally
            attuned as a parent, and helps children to learn to understand and
            manage their own emotions. Psychologist John Gottman coined the term
            “emotion coaching,” where parents validate emotions and guide
            children in managing them, linked to fewer behavioral problems and
            better peer relationships.<sup>20</sup>
            High emotional availability is also linked to secure attachment and resilience.
            Noticing and appropriately reacting to a child's needs is linked to better
            language development, emotional intelligence, and problem-solving skills,<sup
                >21</sup
            >
            and it is found that responsiveness predicts improvements in children’s
            cognitive and social development.<sup>22</sup> Warm communication helps
            build trust and openness. These parents do not seek to dominate. They
            seek to connect.
        </p>
        <p class="with-margin-text indent-8 mb-0">
            Consistency in structure focuses on establishing clear rules,
            expectations, and routines, and following through with predictable
            and fair consequences, which helps children learn to regulate their
            behavior and develop emotional stability. This doesn’t mean being
            rigid, but rather being dependable. Children thrive in environments
            where they know what is expected. Consistency helps reduce anxiety
            and promotes self-discipline.<sup>23</sup>
            Baumrind’s research on parenting styles shows that authoritative parenting
            (high warmth, high structure) is linked with the most positive outcomes
            in children.<sup>24</sup>
            Inconsistent discipline is associated with behavioral problems.<sup
                >25</sup
            >
            These parents do not weaponize their authority. They use it to cultivate
            safety.
        </p>
        <p class="with-margin-text indent-8 mb-0">
            Autonomy supportive parenting is a style that balances providing
            support with allowing children to develop independence, self-worth,
            and their own decision-making skills within clear boundaries. It
            values the child’s perspective, encourages independence, and allows
            age-appropriate choices. Supporting autonomy leads to higher
            self-esteem, motivation, and identity development.<sup>26,27</sup>
            Self-Determination Theory emphasizes autonomy as a core
            psychological need.<sup>28</sup> It has been found that
            autonomy-supportive parenting predicts higher academic performance
            and emotional well-being.<sup>29</sup> These parents do not insist on
            obedience. They encourage autonomy grounded in trust.
        </p>
        <p class="with-margin-text indent-8 mb-0">
            Emotional abuse in parent-child relationships is not an inevitable
            byproduct of imperfect humanity: it is the outcome of a culture that
            grants adults unconditional authority and children conditional
            worth. Parenthood requires emotional regulation, empathy,
            introspection, and humility, but many parents never develop them,
            and yet, society treats parenthood as an unexamined expectation
            rather than a profound psychological responsibility.<sup>30</sup> The
            abuse is preventable, but preventing it requires dismantling the myth
            of parental entitlement, rejecting cultural norms that trivialize children’s
            suffering, and insisting that emotional maturity, not biology, not tradition,
            not social pressure, is the baseline requirement for raising a child.
            Until then, the cycle of harm will continue, leaving countless individuals
            to repair the damage inflicted by adults who should never have been entrusted
            with the responsibility of shaping a developing mind. Not all parents
            deserve children, and a society that refuses to acknowledge this truth
            is complicit in the harm that follows.
        </p>
        <hr />
        <p class="no-margin-text">
            <sup
                >1. American Academy of Pediatrics. “Psychological
                Maltreatment.” Pediatrics, vol. 130, no. 2, 2012, pp. 372–378,
                publications.aap.org/pediatrics/article/130/2/372/29936.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >2. Verywell Family. “What Is Emotional Child Abuse?” Verywell
                Family,
                www.verywellfamily.com/what-is-emotional-child-abuse-4157502.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >3. Verywell Health. “Can You Get PTSD from Emotional Abuse?”
                Verywell Health,
                www.verywellhealth.com/ptsd-from-emotional-abuse-5210626.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >4. Wright, Margaret O'Dougherty et al. “Childhood emotional
                maltreatment and later psychological distress among college
                students: the mediating role of maladaptive schemas.” Child
                abuse & neglect vol. 33,1 (2009): 59-68.
                doi:10.1016/j.chiabu.2008.12.007</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >5. Șițoiu, A., & Pânișoară, G. (2022). Emotional Regulation in
                Parental Optimism—The Influence of Parenting Style.
                Sustainability, 14(8), 4509. https://doi.org/10.3390/su14084509</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >6. Tarabulsy, George M., et al. “Footprints from Childhood:
                Intra- versus Extra-Familial Childhood Maltreatment and Its
                Association to Adult Attachment Organization.” BMC Psychology,
                vol. 13, 2025,
                bmcpsychology.biomedcentral.com/articles/10.1186/s40359-025-03001-7.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >7. De Boer, Arianne, et al. “Long-Term Emotional Consequences
                of Parental Alienation Exposure in Children: A Systematic
                Review.” =, 2021,
                link.springer.com/article/10.1007/s12144-021-02537-2.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >8. WenLi, Zhang et al. “Parenting styles and externalizing
                problem behaviors of preschoolers: mediation through
                self-control abilities and emotional management skills.”
                Frontiers in psychology vol. 16 1433262. 5 Feb. 2025,
                doi:10.3389/fpsyg.2025.1433262</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >9. Kim, Geun Young, et al. “Relationship between Mother’s
                Emotional Intelligence, Negative Parenting Behaviour, and
                Children’s Attachment Instability.” BMC Public Health, vol. 22,
                2022,
                bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-022-13171-3.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >10. Cao, Yiwen, and Kathryn Maguire-Jack. “Interactions with
                Community and Institutions: Preventive Pathways for Child
                Maltreatment.” Child Abuse & Neglect, vol. 62, 2016, pp.
                111–121. PubMed Central,
                pmc.ncbi.nlm.nih.gov/articles/PMC5472093.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >11. Nanda, Sarannya. “The Impact of Parenting Styles on Emotion
                Regulation in Children.” International Journal for
                Multidisciplinary Research (IJFMR), 2025,
                www.ijfmr.com/papers/2025/3/49802.pdf.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >12. Frontini, A., et al. “What Do We Need Kids For?
                Childbearing Motivations, Personal Values, and Socio-demographic
                Differences.” Frontiers in Psychology, 2025,
                doi:10.3389/fpsyg.2025.1612384.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >13. BMC Women’s Health. “Reflections on Timing of Motherhood –
                a Qualitative Online Study with Women of Reproductive Age.” BMC
                Women’s Health, 2024,
                bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-024-03409-0.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >14. Foti, Federica, et al. “The Importance of Motherhood:
                Cultural Norms, Stigma, and Reproduction in Pronatalist
                Societies.” Frontiers in Public Health, vol. 11, 2023,
                doi:10.3389/fpubh.2023.1024438.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >15. McKendree University Scholars. “Voluntary Childlessness:
                Stigma and Societal Pressures on Men and Women.” McKendree
                University, 2019,
                www.mckendree.edu/academics/scholars/reining-issue-29.pdf.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >16. Özgür, Gülşah, and Emine Yesil. “Womanhood Bound to
                Motherhood: Choosing Childlessness in Türkiye.” BMC Psychology,
                vol. 13, 2025,
                bmcpsychology.biomedcentral.com/articles/10.1186/s40359-025-02661-9.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >17. Bowlby, John. Attachment and Loss, Vol. 1: Attachment.
                Basic Books, 1969.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >18. Ainsworth, M. D. S., Blehar, M. C., Waters, E., & Wall, S.
                N. Patterns of Attachment: A Psychological Study of the Strange
                Situation.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >19. Martínez, Paulina, and Andrea Muñoz. “Empathy and Parental
                Sensitivity in Child Attachment: A Systematic Review.” Children,
                vol. 12, no. 4, 2025, www.mdpi.com/2227-9067/12/4/465</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >20. Gottman, J. M., & DeClaire, J. (1997). Raising an
                Emotionally Intelligent Child: The Heart of Parenting. New York:
                Simon & Schuster.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >21. Ferreira, Carolina, et al. “Emotional Competence,
                Attachment, and Parenting Styles in Children and Parents.”
                Psicologia: Reflexão e Crítica, vol. 35, 2022,
                prc.springeropen.com/articles/10.1186/s41155-022-00208-0.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >22. Ren, Xiaoran, et al. “Parenting Pathways to Friendship: How
                Self-Control and Emotion Management Skills Mediate Preschoolers’
                Social Lives in China.” BMC Psychology, vol. 13, 2025,
                bmcpsychology.biomedcentral.com/articles/10.1186/s40359-025-02641-z.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >23. Wang, Ruiping. “The Effects of Parent-Child Attachment
                Style and Parenting Style on Children’s Emotional Competence.”
                Journal of Education, Humanities and Social Sciences, vol. 4,
                2023, drpress.org/ojs/index.php/EHSS/article/view/17828.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >24. Baumrind, D. (1967). Child care practices anteceding three
                patterns of preschool behavior. Genetic Psychology Monographs,
                75(1), 43–88.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >25. Ganesan, Prachi. “The Impact of Parenting Styles on a
                Child’s Emotional Quotient (EQ).” International Journal of
                Indian Psychology, vol. 9, no. 4,
                ijip.in/articles/childs-emotional-quotient-eq. Accessed 18 Nov.
                2025.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >26. Khan, Jamil, et al. “Impact of Parental Styles on Emotional
                Intelligence, Academic Achievement, and Self-Esteem of
                University Students in South Punjab, Pakistan.” Journal of
                Policy Research, vol. 10, no. 3, 2025, pp. 77–82,
                jprpk.com/index.php/jpr/article/download/629/867/1747.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >27. Masood, Faiza, and Muhammad Farhan Raza. “Psychological
                Maltreatment and Its Relationship with Self-Esteem and
                Psychological Stress among Adolescents in Tanzania: A
                Community-Based, Cross-Sectional Study.” BMC Psychiatry, vol.
                19, 2019,
                bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-019-2139-y.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >28. Ryan, Richard M., and Edward L. Deci. "Self-Determination
                Theory and the Facilitation of Intrinsic Motivation, Social
                Development, and Well-Being." American Psychologist, vol. 55,
                no. 1, 2000, pp. 68–78.
            </sup>
        </p>
        <p class="no-margin-text">
            <sup
                >29. Alexander, Ammu E., and Padmakumari Indu. “Impact of
                Parental Over-Protection on Emotional Intelligence in Young
                Adults.” Indian Journal of Psychological Science, 2023,
                www.napsindia.org/wp-content/uploads/2023/06/9-Impact-Of-Parental-Over-Protection-On-Emotional-Intelligence-In-Young-Ammu-E-Alexander-Dr.Padmakumari-Indu-D-Padavan.pdf.</sup
            >
        </p>
        <p class="no-margin-text">
            <sup
                >30. Morris, Amanda S., et al. “Impact of Parenting on Emotion
                Regulation During Childhood and Adolescence.” Child Development
                Perspectives, vol. 11, no. 4, 2017, pp. 233–238. Oxford
                Academic, doi:10.1111/cdep.12224. (Note: this is a review that
                discusses how parenting behaviors influence children's emotion
                regulation.)</sup
            >
        </p>
        <br />
    </div>
</div>
