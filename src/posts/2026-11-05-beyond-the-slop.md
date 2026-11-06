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
draft: false
---

Since adopting AI at home, I have deepened my reliance on it to manage my home lab, and I thought it would be good to share my thoughts on it.

After some experimentation, I've settled on [Hermes](https://hermes-agent.nousresearch.com/) agent from nousresearch.com, which is an [OpenSource](https://github.com/NousResearch/hermes-agent) harness similar to the more popular [OpenClaw](https://en.wikipedia.org/wiki/OpenClaw).

I do find the use of AI via an agent very useful in the limited context of infrastructure management and small coding tasks (like this blog or bash/python scripts to manage my servers), while I find it counterproductive for any creative task.

After experimenting with OpenClaw, I settled on Hermes for its self-learning abilities. Hermes also behaves in a more predictable manner than OpenClaw, which is tuned more toward being your "personal assistant" in real life, which is also a task that I won't let an AI do.

I believe AI fit very well if confined to "cyberspace", and we let anything tangible and physical be part of human experience.

Hermes is brilliant at generating handy scripts and orchestrating them through CRON tasks; it is also brilliant at dealing with my Docker Compose containers and even managing my network via a managed switch and an SSH-accessible router.

I like the freedom to pick and choose whichever LLM I need; currently, I use DeepSeek v4 via its direct API,  with openrouter.ai as a failover if the DeepSeek API is experiencing issues.

I do believe that agents/bots are the is **THE** use case for LLMs, this is also clear by the efforts that Meta, OpenAI and Grok put into developing their agents/bots solutions, although, I completely disagree with the attempt to make these bots look like little friendly pets.

It's quite tempting to anthropomorphise an agent, partly, I did, it has an identity and a name, Neo, I even allow it to run its own blog at [neo.exenza.com](https://neo.exenza.com), and its clear by reading at that blog that it's a waste of time to try to have AI creating meaningful content (I should probably just have IT stop writing)

But mostly, I treat Neo as a "natural language terminal" via Telegram to let it manage my homelab. Adopting AI to manage my whole lab allowed me to introduce new networking devices and setup a network that can fail over over 5g while keeping a VPN tunnel with a Hetzner VPS which host my DNS and SMTP relay, this allows me to keep receiving emails even when my optical fiber is down, and, if the whole home went dark (power failure/server failure) the VPS is queuing the emails for 10 days.

It would have taken me months to achieve this setup, probably, I would have never did it because I couldn't commit that amount of time to it, with AI it took me few hours.

Did I learn anything from it?

Well, I know what a VPN tunnel is, for example, but I for sure did not learn MORE than what I already know; I was simply able to create the desired outcome by asking Hermes to do it, it works, I kind of trust it but I do not feel I fully "own it"

What this highlight to me is that AI is a powerful way to experiment, but I would not trust myself to use it in a production environment for something beyond my personal home lab, for instance, he confidently created as well a script to monitor my UPS, then, I've started to get false positives on the mains being down, when I questioned Hermes he found several bugs on the monitoring system it implemented, so I wonder how many more bugs and silent issues are lurking in my home lab now... only time will tell.

What I really hope for the future is to be able to self host as well a GPU strong enough to run something close to what I run now (DeepSeek v4) not only for privacy and data ownership, but as well to be self reliant and able to manage my lab even if there is an outage with a cloud model provider or no internet connection... because I'm quickly approaching the point at which I won't be able to manage my lab without Hermes fixing its own bugs.

Good luck I guess...
