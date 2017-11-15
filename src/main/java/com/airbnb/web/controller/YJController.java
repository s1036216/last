package com.airbnb.web.controller;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.airbnb.web.command.Command;
import com.airbnb.web.mapper.YJMapper;
import com.airbnb.web.service.IListService;

@RestController
public class YJController {
   private static final Logger logger = LoggerFactory.getLogger(YJController.class);
   @Autowired YJMapper mapper;
   @Autowired Command cmd;
   @RequestMapping("/put/listimg")
   public @ResponseBody List<?> getImg() {
      logger.info("YJController getImg {}." ,"진입 ");
      List<?> list = new IListService() {
         @Override
         public List<?> execute(Object o) {
            // TODO Auto-generated method stub
            return mapper.selectList(cmd);
         }
      }.execute(cmd);
      System.out.println("List 확인"+list);
      return list;
   }
}