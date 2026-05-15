const prisma =
  require("../lib/prisma");

exports.createVideo =
  async (req, res) => {
    try {
      const {
        title,
        description,
      } = req.body;

      const videoPath =
        req.file
          ? `/uploads/${req.file.filename}`
          : null;

      const video =
        await prisma.video.create(
          {
            data: {
              title,
              description,
              videoUrl:
                videoPath,
              thumbnail:
                "",
              userId:
                req.user.id,
            },
          }
        );

      res.status(201).json(
        video
      );
    } catch (error) {
      res.status(400).json({
        message:
          error.message,
      });
    }
  };

exports.getVideos =
  async (req, res) => {
    try {
      const limit = 5;

      const cursor =
        req.query.cursor;

      const videos =
        await prisma.video.findMany(
          {
            take: limit + 1,

            skip: cursor
              ? 1
              : 0,

            cursor: cursor
              ? {
                  id:
                    parseInt(
                      cursor
                    ),
                }
              : undefined,

            orderBy: {
              createdAt:
                "desc",
            },

            include: {
              user: true,
              comments: true,
              likes: true,
            },
          }
        );

      let nextCursor =
        null;

      if (
        videos.length >
        limit
      ) {
        const nextItem =
          videos.pop();

        nextCursor =
          nextItem.id;
      }

      res.json({
        videos,
        nextCursor,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

exports.likeVideo =
  async (req, res) => {
    try {
      const videoId =
        parseInt(
          req.params.id
        );

      const existingLike =
        await prisma.like.findFirst(
          {
            where: {
              userId:
                req.user.id,
              videoId,
            },
          }
        );

      if (existingLike) {
        return res.status(400).json({
          message:
            "Already liked",
        });
      }

      const like =
        await prisma.like.create(
          {
            data: {
              userId:
                req.user.id,
              videoId,
            },
          }
        );

      res.json(like);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };