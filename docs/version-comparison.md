# BRTI Version Comparison

Two quiz versions are available for A/B comparison of user interest and engagement.

## Version Matrix

| Feature | Brainrot Quiz | Classic Quiz |
| --- | --- | --- |
| Route | `/quiz/brainrot` | `/quiz/classic` |
| Questions | 15 | 30 (+2 special gate) |
| Dimensions | 5 | 15 (5 models × 3) |
| Personality Types | 16 | 22 (+2 special) |
| Time to Complete | ~3 min | ~8 min |
| Scoring | Vector distance (max 10) | Vector distance (max 30) |
| Special Mechanic | None | Gate question → WASTED type |
| Fallback Type | None | GLITCH (match < 60%) |

## Dimensions

### Brainrot Quiz (5 Dimensions)
1. **CH** — Chaos Energy
2. **RZ** — Rizz Factor
3. **BR** — Brain Mode
4. **SQ** — Squad Energy
5. **VB** — Vibe Check

### Classic Quiz (15 Dimensions, 5 Models)
- **Self Model**: Self-Worth (S1), Self-Clarity (S2), Core Drive (S3)
- **Emotional Model**: Trust Level (E1), Heart Mode (E2), Boundary Style (E3)
- **Attitude Model**: World Lens (A1), Rule Stance (A2), Purpose Level (A3)
- **Action Model**: Motivation Type (Ac1), Decision Speed (Ac2), Execution Power (Ac3)
- **Social Model**: Social Battery (So1), Personal Bubble (So2), Mask Level (So3)

## Scoring Algorithm

Both versions use the same vector distance matching:
1. Sum answer scores per dimension
2. Convert summed scores to levels (L/M/H)
3. Build user vector from level values (L=1, M=2, H=3)
4. Compare against each personality type's pattern vector
5. Rank by lowest distance, then highest exact-dimension matches
6. Return best match with similarity percentage

### Thresholds
- **Brainrot**: 3 questions/dim, range 3-9, L≤4 / M=5-6 / H≥7
- **Classic**: 2 questions/dim, range 2-6, L≤3 / M=4 / H≥5

## A/B Metrics to Track

- **Completion rate**: % of users who start vs. finish
- **Time on page**: Average session duration per version
- **Share rate**: Result page shares or screenshots
- **Bounce rate**: Users who leave without starting
- **Return rate**: Users who come back to try the other version
- **Version preference**: Which landing card gets more clicks
