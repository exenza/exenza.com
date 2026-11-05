---
title: Beyond the SLOP
date: 2026-11-05
description: What I'm actually using AI for
image: /assets/img/blog/2026-11-05 09.10.03.jpg
postTags:
  - ai
  - slop
  - hermes
  - agent
  - home lab
draft: true
---

Since adopting AI at home, I have deepened my reliance on it to manage my home lab, and I thought it would be good to share my thoughts on it.

After some experimentation, I've settled on [Hermes](https://hermes-agent.nousresearch.com/) agent from nousresearch.com, which is an [OpenSource](https://github.com/NousResearch/hermes-agent) harness similar to the more popular [OpenClaw](https://en.wikipedia.org/wiki/OpenClaw).

I do find the use of AI via an agent very useful in the limited context of infrastructure management and small coding tasks (like this blog or bash/python scripts to manage my servers), while I find it counterproductive for any creative task.

After experimenting with OpenClaw, I settled on Hermes for its self-learning abilities. Hermes also behaves in a more predictable manner than OpenClaw, which is tuned more toward being your "personal assistant" in real life, which is also a task that I won't let an AI do.

I believe AI fit very well if confined to "cyberspace", and we let anything tangible and physical be part of human experience.

Hermes is brilliant at generating handy scripts and orchestrating them through CRON tasks; it is also brilliant at dealing with my Docker Compose containers and even managing my network via a managed switch and an SSH-accessible router.

I like the freedom to pick and choose whichever LLM I need; currently, I use DeepSeek v4 via its direct API,  with openrouter.ai as a failover if the DeepSeek API is experiencing issues.

I do believe that agents/bots are the is **THE** use case for LLMs, this is also clear by the efforts that Meta, OpenAI and Grok put into developing their agents/bots solutions, although, I completely disagree with the attempt to make these bots look like little friendly pets.

It's quite tempting to anthropomorphise an agent, partly, I did, it has an identity and a name, Neo, I even allow it to run its own blog at [neo.exenza.com](https://neo.exenza.com), and its clear by reading at that blog that it's a waste of time to try to have AI creating meaningful content (I should probably just shutting it down)
